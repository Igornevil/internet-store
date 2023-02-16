import React, { useEffect } from "react";
import Categories from "../categories";
import Products from "../common/product/products";
import { useDispatch } from "react-redux";
import { loadProductByCategory } from "../../store/products";
import { loadBrandsByCategory } from "../../store/brands";

const Phone = () => {
    useEffect(() => {
        dispatch(loadProductByCategory("?cat=Phone"));
        dispatch(loadBrandsByCategory("?cat=Phone"));
    }, []);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container text-center min-height-100">
                <div className="row">
                    <div className="col-sm-3">
                        <Categories />
                    </div>
                    <div className="col-sm-9">
                        <Products />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Phone;
