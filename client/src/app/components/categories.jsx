import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getLoadingStatusBrand,
    getBrands,
    loadBrandsList
} from "../store/brands";
import CategoriesList from "./common/categories/categoriList";
import { filterEntities, deFilterEntities } from "../store/products";

const Categories = ({ categoryName }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBrandsList());
    }, []);
    const loadingStatusBrends = useSelector(getLoadingStatusBrand());
    let brands = useSelector(getBrands());

    const handleChange = (event) => {
        if (event.target.checked) {
            dispatch(filterEntities(event.target.id));
        } else {
            dispatch(deFilterEntities(event.target.id));
        }
    };

    if (loadingStatusBrends) {
        return (
            <>
                <div className="container">
                    <p>Loading...</p>
                </div>
            </>
        );
    }
    if (categoryName) {
        brands = brands.filter((el) => el.category === categoryName);
    }
    return (
        <>
            <CategoriesList categories={brands} handleChange={handleChange} />
        </>
    );
};

Categories.propTypes = {
    categoryName: PropTypes.string
};

export default Categories;
