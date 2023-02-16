import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getCurrentUserData } from "../../store/user";

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUserData());

    if (isLoggedIn) {
        return currentUser.isAdmin ? <Outlet /> : <Navigate to="/" />;
    }

    return <Navigate to="/login" />;
};

export default PrivateRoutes;
