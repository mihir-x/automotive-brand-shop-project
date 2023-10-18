import { useLocation } from "react-router-dom";


const BrandProducts = () => {

    const location = useLocation()
    console.log(location.state.brand.brand_name)

    return (
        <div>
            this is brand page
        </div>
    );
};

export default BrandProducts;