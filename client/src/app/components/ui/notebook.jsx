import React, { useEffect } from "react";
import Categories from "../categories";
import Products from "../common/product/products";
import { useDispatch } from "react-redux";
import { loadProductByCategory } from "../../store/products";
import { loadBrandsByCategory } from "../../store/brands";

const Notebook = () => {
    useEffect(() => {
        dispatch(loadProductByCategory("?cat=Notebook"));
        dispatch(loadBrandsByCategory("?cat=Notebook"));
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

export default Notebook;
