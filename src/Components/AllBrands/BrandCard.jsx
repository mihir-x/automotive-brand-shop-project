import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BrandCard = ({ brands }) => {

    const { brand_image, brand_name } = brands
    // const navigate = useNavigate()
    // const brand = brand_name

    // const handleBrandClick = () => {
    //     navigate('/brands', { state: brand })
    // }

    return (
        <Link to='/brands' state={{brand: {brand_name}}}>
            <div className="card h-[25rem] w-full shadow-xl outline cursor-pointer">
                <figure className='h-[80%]'><img src={brand_image} alt="Shoes" className='h-full w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand_name}</h2>

                </div>
            </div>
        </Link>
    );
};

export default BrandCard;

BrandCard.propTypes = {
    brands: PropTypes.object
}