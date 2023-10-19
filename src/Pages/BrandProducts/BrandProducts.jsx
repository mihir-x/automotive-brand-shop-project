import { useLoaderData, useLocation } from "react-router-dom";
import Product from "../../Components/Product/Product";


const BrandProducts = () => {

    const allBrands = useLoaderData()
    const location = useLocation()
    const brand = location.state.brand.brand_name
    const existingProduct = allBrands.filter(brnd => brnd.brand === brand)
    

    return (
        <div>
            <div>
                carousel goes here
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