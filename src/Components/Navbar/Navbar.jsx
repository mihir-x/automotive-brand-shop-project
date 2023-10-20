import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const navLinks = <>
        <li className="text-base font-semibold"><NavLink to='/' className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'font-bold underline text-lime-500 bg-lime-200' : ''}>Home</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/addproduct' className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'font-bold underline text-lime-500 bg-lime-200' : ''}>Add Product</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/mycart' className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'font-bold underline text-lime-500 bg-lime-200' : ''}>My Cart</NavLink></li>
    </>

    const handleLogOut = () => {    
        logOut()
        .then(() => {
            swal('See ya!', 'User logged out successfully', 'success')
        })
        .catch(error => {
            swal('Ooops!', error.message, 'error')
        })
    }

    return (
        <div>
            <div className="navbar shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="md:flex items-center gap-2">
                        <img src="https://i.ibb.co/rcCbz9W/preview.png" alt="" className="h-10 w-20"/>
                        <h3 className="text-lg md:text-xl font-bold text-blue-700">Brand Shop</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex flex-col md:flex-row items-center gap-1">
                            <div className="flex items-center gap-1 p-1 border rounded-l-full rounded-r-full">
                                <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full"/>
                                <h3 className="text-sm md:text-xl font-bold">{user.displayName}</h3>
                            </div>
                            <div>
                                <button onClick={handleLogOut} className="px-2 py-1 rounded-md text-sm font-bold bg-blue-500 text-white">Log Out</button>
                            </div>
                        </div>
                        : <Link to='/login'><button className="btn">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;