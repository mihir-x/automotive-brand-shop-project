import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            this is root
            <Outlet></Outlet>
        </div>
    );
};

export default Root;