import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUserLoadingStatus,
    loadCurrentUser
} from "../../../store/user";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const userStatusLoading = useSelector(getUserLoadingStatus());

    const isLoggedIn = useSelector(getIsLoggedIn());
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadCurrentUser());
        }
    }, [isLoggedIn]);
    if (userStatusLoading) return "Loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
