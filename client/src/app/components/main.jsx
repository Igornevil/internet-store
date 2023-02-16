import React from "react";
import Products from "./common/product/products";
import Carousel from "./utils/carousel";

const Main = () => {
    return (
        <>
            <Carousel />
            <div className="container text-center mh-100">
                <Products />
            </div>
        </>
    );
};

export default Main;
