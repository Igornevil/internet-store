import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    loadProductById,
    getProduct,
    loadProductsList
} from "../../../store/products";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./slider";
import { TiShoppingCart } from "react-icons/ti";
import { addOrder } from "../../../store/order";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const onCartAdd = () => {
        dispatch(addOrder(product));
    };

    useEffect(() => {
        dispatch(loadProductById(id));
        dispatch(loadProductsList());
    }, []);
    const product = useSelector(getProduct());
    if (!product) {
        return (
            <>
                <div className="container min-height-100">Loading...</div>
            </>
        );
    }
    return (
        <>
            <div className="container min-height-100 ">
                <div className="row">
                    <div className="col col-test">
                        <Slider />
                    </div>
                    <div className="col col-test product-info">
                        <div className="product-info-in-stock">
                            Есть в наличии
                        </div>
                        <div className="product-info-price">
                            {product.price} <span>грн</span>
                            <div className="product-info-old-price">
                                {product.price_old &&
                                    product.price_old !== "0" &&
                                    product.price_old + " грн"}
                            </div>
                        </div>
                        <div className="product-info-buy">
                            <button className="btn btn-success">
                                Купить в 1 клик
                            </button>
                            <button
                                className="btn btn-light"
                                onClick={onCartAdd}
                            >
                                В корзину <TiShoppingCart />
                            </button>
                        </div>
                        <div className="product-info-delivery"></div>
                    </div>
                </div>
                <div className="product-description">{product.description}</div>
            </div>
        </>
    );
};

export default ProductDetail;
