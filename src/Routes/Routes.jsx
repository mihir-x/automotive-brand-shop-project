import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import MyCart from "../Pages/MyCart/MyCart";


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
                loader: () => fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/users')
            },
            {
                path: '/login',
                element: <Login></Login>,
                loader: () => fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/users')
            },
            {
                path: '/addproduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: '/brands',
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/products')
            },
            {
                path: '/brands/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/products/${params.id}`)
            },
            {
                path: '/:id',
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({params}) => fetch(`https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/${params.id}`)
            },
            {
                path: '/mycart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch('https://brand-shop-server-7p0wxtrvr-mihirs-projects-5e226e4c.vercel.app/added')
            }
        ]
    }
])

export default Routes;