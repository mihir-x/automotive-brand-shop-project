import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import AllBrands from "../../Components/AllBrands/AllBrands";
import DrivingPassion from "../../Components/DrivingPassion/DrivingPassion";
import { useEffect, useState } from "react";


const Home = () => {

    const allBrands = useLoaderData()
    const [isLightMode, setIsLightMode] = useState(false)

    const toggleTheme = () => {
        setIsLightMode(!isLightMode)
    }
    useEffect(() => {
        if (isLightMode) {
            document.getElementById('home').classList.add('bg-white')
            document.getElementById('home').classList.add('text-black')
        }
        else {
            document.getElementById('home').classList.remove('bg-white')
            document.getElementById('home').classList.remove('text-black')
        }
    }, [isLightMode])

    return (
        <div id="home">
            <div className="relative">
                <button onClick={toggleTheme} className="absolute right-2 top-2 px-2 py-1 rounded-md bg-blue-700">{isLightMode?<p>Dark Theme</p>: <p className="text-white">Light Theme</p>}</button>
                <Banner></Banner>
            </div>
            <AllBrands allBrands={allBrands}></AllBrands>
            <DrivingPassion></DrivingPassion>
            <Footer></Footer>
        </div>
    );
};

export default Home;