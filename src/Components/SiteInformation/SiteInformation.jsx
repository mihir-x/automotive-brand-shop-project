import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const SiteInformation = ({allBrands}) => {
    const [totalUser, setTotalUser] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)
    useEffect(()=>{
        fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/users')
        .then(res => res.json())
        .then(data => setTotalUser(data))
        fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/products')
        .then(res => res.json())
        .then(data => setTotalProducts(data))
    },[])

    return (
        <div className="relative shadow-2xl mt-10">
            <div className="md:grid grid-cols-3 max-w-screen-lg mx-auto hidden h-[10rem] p-5 text-3xl font-bold text-center">
                <div className="space-y-8">
                    <h1 className="text-black">Number Of Brands</h1>
                    <h1 className="text-blue-700 text-5xl">{allBrands.length}</h1>
                </div>
                <div className="space-y-8 border-x-2">
                    <h1 className="text-black">Number Of Products</h1>
                    <h1 className="text-blue-700 text-5xl">{totalProducts.length}</h1>
                </div>
                <div className="space-y-8">
                    <h1 className="text-black">Number Of Users</h1>
                    <h1 className="text-blue-700 text-5xl">{totalUser.length}</h1>
                </div>
            </div>
            <div className="absolute -z-50 inset-0 bg-gradient-to-l from-transparent via-lime-200 to-transparent"></div>
            <div className="absolute -z-50 inset-0 bg-gradient-to-r from-transparent via-lime-200 to-transparent"></div>
        </div>
    );
};

export default SiteInformation;
SiteInformation.propTypes = {
    allBrands: PropTypes.array
}