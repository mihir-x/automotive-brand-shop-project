import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";


const Registration = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const existingUsersInDatabase = useLoaderData()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        if (!/^(?=.*?[A-Z])(?=.*?[!@#$%^&*?-]).{6,}$/.test(password)) {
            swal('Invalid password', 'Password must contain 6 character, an uppercase and a special character', 'error')
            return
        }

        createUser(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        window.location.reload(true)
                    })
                    .catch((err) => {
                        swal('Ooops!', err.message, 'error')
                    })

                console.log(result)
                const userCreationTime = result?.user?.metadata?.creationTime
                const lastLoginTime = result?.user?.metadata?.lastSignInTime
                const user = { name, email, photo, password, userCreationTime, lastLoginTime }

                const isExists = existingUsersInDatabase.find(userInDB => userInDB.email == email)
                //send user data to database
                if (!isExists) {
                    fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/users', {
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
                else{
                    swal('Oops', 'user already exists in database', 'error')
                    return
                }
            })
            .catch(err => {
                swal('Ooops!', err.message, 'error')
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
                    fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/users', {
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
                <div className="hero-content flex-col justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
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
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="mx-auto mb-2">Have account? <Link to='/login' className="text-blue-700">Login</Link></p>
                    </div>
                    <button onClick={handleGoogleLogin} className="px-4 py-2 outline rounded-md">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;