import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // console.log(user)
    const location = useLocation();

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return  children;
    }
    return <Navigate to="/logIn" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;