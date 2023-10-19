import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product = useLoaderData()
    const { name, image, description, price, rating } = product

    return (
        <div className="h-screen max-w-screen-lg mx-auto shadow-xl mb-5 md:mb-8 lg:mb-14">
            <div className="relative h-[70%]">
                <div className="bg-black bg-opacity-50 absolute top-0 h-[15%] w-full flex items-center justify-center">
                    <h1 className='text-lg md:text-3xl lg:text-4xl font-bold'>{name}</h1>
                </div>
                <img src={image} alt="" className="h-full w-full" />
            </div>
            <div className="p-5 space-y-5">
                <div>
                    <p className="text-sm md:text-lg">{description}</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h4 className="font-bold text-base md:text-xl">${price}</h4>
                        <p className="font-bold text-base md:text-xl">Rating: {rating}</p>
                    </div>
                    <div>
                        <button className='px-2 py-1 bg-lime-500 rounded-md text-white font-bold text-center'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;