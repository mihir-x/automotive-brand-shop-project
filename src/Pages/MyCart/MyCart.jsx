import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import CartCard from "../../Components/CartCard/CartCard";


const MyCart = () => {
    const {user} = useContext(AuthContext)
    const storedCart = useLoaderData()
    const myCart = storedCart.filter(cart => cart.email === user.email)
    console.log(myCart)

    return (
        <div>
            <dir>
                {
                    (myCart.length > 0) ? <div className="mt-5 md:mt-8 lg:mt-14 max-w-screen-lg mx-auto">
                        <div className="text-center">
                            <h1 className='text-lg md:text-3xl lg:text-4xl font-bold'>Your Cart</h1>
                        </div>
                        <div className=" space-y-5">
                            {
                                myCart.map(cart => <CartCard key={cart._id} cart={cart}></CartCard>)
                            }
                        </div>
                    </div>
                    : <div className="h-[20rem] flex items-center justify-center text-center">
                        <h1 className='text-lg md:text-3xl lg:text-4xl font-bold'>Currently You Have Nothing In Your Cart</h1>
                    </div>
                }
            </dir>
        </div>
    );
};

export default MyCart;