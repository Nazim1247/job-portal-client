import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <p className='text-center'><span className="loading loading-spinner loading-lg"></span></p>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>;
};

export default PrivateRoute;