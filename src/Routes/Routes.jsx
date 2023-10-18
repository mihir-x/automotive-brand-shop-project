import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../Pages/AddProduct/AddProduct";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/registration',
                element: <Registration></Registration>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/login',
                element: <Login></Login>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/addproduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            }
        ]
    }
])

export default Routes;