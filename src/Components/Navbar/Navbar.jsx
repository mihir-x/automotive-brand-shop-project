import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li className="text-base font-semibold"><NavLink to='/' className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'font-bold underline text-lime-500 bg-lime-200' : ''}>Home</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/addproduct' className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'font-bold underline text-lime-500 bg-lime-200' : ''}>Add Product</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/mycart' className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'font-bold underline text-lime-500 bg-lime-200' : ''}>My Cart</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar shadow-2xl bg-base-100">
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
                    <Link to='/login'><button className="btn">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;