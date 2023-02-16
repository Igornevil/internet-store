import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    loadProductsList,
    getProducts,
    getLoadingStatus,
    getFilteredProducts,
    setFilteredRemoveAll
} from "../../../store/products";
import Product from "./product";

const Products = ({ filterMass }) => {
    const dispatch = useDispatch();
    let products = useSelector(getProducts());
    if (filterMass) {
        products = filterMass;
    }

    useEffect(() => {
        dispatch(loadProductsList());
        dispatch(setFilteredRemoveAll());
    }, []);

    const filtered = useSelector(getFilteredProducts());
    const loadingStatusProducts = useSelector(getLoadingStatus());

    if (loadingStatusProducts) {
        return (
            <>
                <div className="container">
                    <p>Loading...</p>
                </div>
            </>
        );
    }

    if (filtered && filtered.length !== 0) {
        return (
            <>
                <section className="main-content">
                    <div className="container">
                        <div className="row">
                            {filtered.map((product) => (
                                <Product key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <section className="main-content">
                <div className="container">
                    <div className="row">
                        {products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

Products.propTypes = {
    filterMass: PropTypes.array
};

export default Products;
