import React from "react";
import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addOrder } from "../../../store/order";

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const onCartAdd = () => {
        dispatch(addOrder(product));
    };
    return (
        <div className="col-lg-4 col-sm-6 mb-3">
            <div className="product-card">
                <div className="product-thumb">
                    <a href={"product/" + product._id}>
                        <img src={product.image} alt="" />
                    </a>
                </div>
                <div className="product-details">
                    <h4>
                        <a href={"product/" + product._id}>{product.name}</a>
                    </h4>
                    <p>{product.description}</p>
                    <div className="product-bottom-details d-flex justify-content-between">
                        <div className="product-price">
                            {product.price_old !== "0" && (
                                <small>{product.price_old}</small>
                            )}
                            {product.price} грн
                        </div>
                        <div className="product-links">
                            <FaShoppingCart
                                className="add-cart"
                                onClick={onCartAdd}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
