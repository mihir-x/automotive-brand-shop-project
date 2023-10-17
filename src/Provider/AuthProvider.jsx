import { createContext } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}