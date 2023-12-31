import PropTypes from 'prop-types';
import swal from 'sweetalert';

const CartCard = ({ cart, currentCart, setCurrentCart }) => {

    const { _id, name, brand, image, type, price, rating } = cart

    const handleDelete = () => {
        fetch(`https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/added/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal('Thank You!', 'Product deleted successfully', 'success')
                    const remainingCart = currentCart.filter(c => c._id !== _id)
                    setCurrentCart(remainingCart)
                }
            })
    }

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
            <div className="text-sm md:text-2xl">
                {
                    Array(5).fill().map((_, index) => (<span key={index} className={`${index+1 <=rating? 'text-orange-500': ''}`}>&#9733;</span>))
                }
            </div>
            <div className='text-center font-bold'>
                <h4>Price: ${price}</h4>
            </div>
            <div className='flex flex-col gap-2'>
                <button onClick={handleDelete} className='p-2 bg-orange-400 rounded-md text-white font-bold md:w-[70%] text-center'>Delete</button>
            </div>
        </div>
    );
};

export default CartCard;

CartCard.propTypes = {
    cart: PropTypes.object,
    currentCart: PropTypes.array,
    setCurrentCart: PropTypes.func
}