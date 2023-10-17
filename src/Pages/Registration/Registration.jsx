import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";


const Registration = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const email = form.email.value 
        const photo = form.photo.value
        const password = form.password.value
        
        createUser(email, password)
        .then(result =>{
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

            //send user data to database
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
        })
        .catch(err => {
            swal('Ooops!', err.message, 'error')
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
                </div>
            </div>
        </div>
    );
};

export default Registration;