import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading/Loading";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}