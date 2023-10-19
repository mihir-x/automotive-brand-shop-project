import { useLoaderData, useLocation } from "react-router-dom";
import Product from "../../Components/Product/Product";
import { useState } from "react";


const BrandProducts = () => {

    const allBrands = useLoaderData()
    const location = useLocation()
    const brand = location.state.brand.brand_name
    const existingProduct = allBrands.filter(brnd => brnd.brand === brand)
    const [current, setCurrent] = useState(0)
    
    const photos = [
        'https://i.ibb.co/8N3XTTB/nsdvc9738i761.jpg',
        'https://i.ibb.co/tYGSrC4/koenigsegg-gemera.jpg',
        'https://i.ibb.co/nM5BVsm/teakak.jpg'
    ]
    const length = photos.length
    const handlePrev = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }
    const handleNext = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    return (
        <div className="mb-5 md:mb-8 lg:mb-16">
            <div className="h-[20rem] relative">
                <button onClick={handlePrev} className="btn absolute left-5 top-[50%]">prev</button>
                <img src={photos[current]} alt="" className="h-full w-full"/>
                <button onClick={handleNext} className="btn absolute right-5 top-[50%]">next</button>
            </div>
            <div>
                {
                    (existingProduct.length > 0) ? <div className="mt-5 md:mt-8 lg:mt-14 max-w-screen-lg mx-auto">
                        <div className="text-center">
                            <h1 className='text-lg md:text-3xl lg:text-4xl font-bold'>Check Out Our Available {brand} Products</h1>
                        </div>
                        <div className=" space-y-5">

                            {
                                existingProduct.map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                    </div>
                    : <div className="h-[20rem] flex items-center justify-center text-center">
                        <h1 className='text-lg md:text-3xl lg:text-4xl font-bold'>Sorry! Currently We Don&apos;t Have Any Available {brand} Products</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default BrandProducts;