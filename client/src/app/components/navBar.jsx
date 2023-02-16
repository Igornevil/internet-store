import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./ui/navProfile";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/user";
import CartContent from "./cartContent";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" to="/">
                    Главная
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/phone"
                            >
                                Телефоны
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/notebook"
                            >
                                Ноутбуки
                            </Link>
                        </li>
                    </ul>
                    <CartContent />

                    <div className="navbar-text d-flex align-items-center">
                        {isLoggedIn ? (
                            <NavProfile />
                        ) : (
                            <Link
                                className="nav-link "
                                aria-current="page"
                                to="/login"
                            >
                                Войти/Зарегистрироваться
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
