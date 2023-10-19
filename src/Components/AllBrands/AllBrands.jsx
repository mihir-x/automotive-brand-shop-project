import PropTypes from 'prop-types';
import BrandCard from './BrandCard';

const AllBrands = ({allBrands}) => {

    

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-lg md:text-3xl lg:text-5xl font-bold'>Our Brands</h1>
                <p className='text-base md:text-lg font-medium'>Check out our brands and shop away</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto gap-5'>
                {
                    allBrands.map(brands => <BrandCard key={brands.id} brands={brands}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default AllBrands;

AllBrands.propTypes = {
    allBrands: PropTypes.array
}