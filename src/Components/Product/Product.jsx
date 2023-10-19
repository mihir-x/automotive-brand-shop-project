import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, brand, image, type, price, rating} = product
    console.log(_id, name, brand, image, type, price, rating)
    return (
        <div className='flex flex-col items-center md:grid md:grid-cols-7 border p-2 rounded-md mt-5 md:mt-8 lg:mt-10'>
            <div className='text-center font-bold'>
                <h4>Name: {name}</h4>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='text-center font-bold'>
                <h4>Brand: {brand}</h4>
            </div>
            <div className='text-center font-bold'>
                <h4>Type: {type}</h4>
            </div>
            <div className='text-center font-bold'>
                <h4>Rating: {rating}</h4>
            </div>
            <div className='text-center font-bold'>
                <h4>Price: ${price}</h4>
            </div>
            <div className='flex flex-col gap-2'>
                <Link to={`/brands/${_id}`} className='p-2 bg-lime-500 rounded-md text-white font-bold w-[70%] text-center'>Details</Link>
                <Link to={`/${_id}`} className='p-2 bg-lime-500 rounded-md text-white font-bold w-[70%] text-center'>Update</Link>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.object
}