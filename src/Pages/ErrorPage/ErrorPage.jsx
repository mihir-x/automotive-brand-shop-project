import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-5">
            <img src="https://i.ibb.co/tckdZWJ/pngtree-removebg-preview.png" alt="" className="h-32 md:h-44"/>
            <h1 className="md:text-2xl lg:text-4xl font-bold">Oh snap! go home kid</h1>
            <Link to={-1}><button className="btn btn-accent">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;