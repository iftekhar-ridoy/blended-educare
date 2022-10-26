import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>loading...</div>
    }

    if (!user) {
        return <Navigate to='/' state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRoutes;