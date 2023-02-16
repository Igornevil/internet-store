import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Login from "./layouts/login";
import AppLoader from "./components/ui/hoc/appLoader";
import NavBar from "./components/navBar";
import LogOut from "./layouts/logOut";
import PrivatRoutes from "./components/common/privateRoutes";
import Admin from "./components/admin";
import Phone from "./components/ui/phone";
import Notebook from "./components/ui/notebook";
import Footer from "./components/ui/footer";
import ProductDetail from "./components/common/product/productDetails";

function App() {
    return (
        <AppLoader>
            <NavBar />
            <Routes>
                <Route element={<PrivatRoutes />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>
                <Route path="/logout" element={<LogOut />} />
                <Route path="/login" element={<Login />} />
                <Route path="/phone" element={<Phone />} />
                <Route path="/notebook" element={<Notebook />} />

                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/" element={<Main />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </AppLoader>
    );
}

export default App;
