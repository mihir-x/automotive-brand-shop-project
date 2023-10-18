import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
    const existingUsersInDatabase = useLoaderData()
    const { logIn, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 

        logIn(email, password)
        .then(result => {
            swal(`Congratulations ${result.user.displayName}`, 'Login Successful', 'success')
            navigate('/')
        })
        .catch(error => {
            if(error.code === 'auth/wrong-password'){
                swal('Ooops!', 'Incorrect password', 'error')
            }
            if(error.code === 'auth/user-not-found'){
                swal('Ooops!', 'Incorrect email', 'error')
            }
            else{
                swal('Ooops!', 'Incorrect email or password', 'error')
            }
        })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                const name = result?.user?.displayName
                const email = result?.user?.email
                const photo = result?.user?.photoURL
                const password = ''
                const userCreationTime = result?.user?.metadata?.creationTime
                const lastLoginTime = result?.user?.metadata?.lastSignInTime
                const user = { name, email, photo, password, userCreationTime, lastLoginTime }
                const isExists = existingUsersInDatabase.find(userInDB => userInDB.email == email)
                //send user data to database
                if (!isExists) {
                    fetch('http://localhost:5000/users', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                    swal('Congratulations!', 'User created Successfully', 'success')
                    navigate('/')
                }

            })
            .catch(error => {
                swal('Ooops!', error.message, 'error')
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="mx-auto mb-2">Don&apos;t have account? <Link to='/registration' className="text-blue-700">Register</Link></p>
                    </div>
                    <button onClick={handleGoogleLogin} className="px-4 py-2 outline rounded-md">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;