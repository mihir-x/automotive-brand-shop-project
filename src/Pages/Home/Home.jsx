import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import AllBrands from "../../Components/AllBrands/AllBrands";
import DrivingPassion from "../../Components/DrivingPassion/DrivingPassion";


const Home = () => {

    const allBrands = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <AllBrands allBrands= {allBrands}></AllBrands>
            <DrivingPassion></DrivingPassion>
            <Footer></Footer>
        </div>
    );
};

export default Home;