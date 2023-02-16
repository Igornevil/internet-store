import React from "react";
import { getOrders, removeOrder, getOrdersLoadingStatus } from "../store/order";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartContent = () => {
    let price = 0;
    const orders = useSelector(getOrders());
    const loadingOrdersStatus = useSelector(getOrdersLoadingStatus());

    if (orders && orders.length > 0) {
        orders.forEach((element) => {
            price += element.count * element.price;
        });
    }
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        const btn = document.getElementById("cart-delete");
        dispatch(removeOrder(btn.dataset.cartDelete));
    };

    if (loadingOrdersStatus) {
        return (
            <>
                <FaShoppingCart
                    className="shop-cart-button"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-cart"
                />
                <div
                    className="modal fade"
                    id="modal-cart"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header bg-secondary text-white">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Корзина
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <h1 className="text-center">Корзина пуста</h1>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <FaShoppingCart
                className="shop-cart-button"
                data-bs-toggle="modal"
                data-bs-target="#modal-cart"
            />
            <span className="cart-count">{orders.length}</span>
            <div
                className="modal fade"
                id="modal-cart"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-white">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Корзина
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <tbody>
                                    {(orders.length === 0 ||
                                        loadingOrdersStatus) && (
                                        <h1 className="text-center">
                                            Корзина пуста
                                        </h1>
                                    )}
                                    {orders.map((el) => (
                                        <tr key={el._id}>
                                            <td>
                                                <img
                                                    src="img/hp_1.jpg"
                                                    alt=""
                                                />
                                            </td>
                                            <td>
                                                <a href="#">
                                                    {el.category} {el.brand}
                                                    {el.model}
                                                </a>
                                            </td>
                                            <td>{el.price}</td>
                                            <td>{el.count}</td>
                                            <td key={el._id}>
                                                <MdOutlineDeleteForever
                                                    id="cart-delete"
                                                    className="button-delete"
                                                    data-cart-delete={el._id}
                                                    onClick={handleDelete}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Сумма: </td>
                                        <td>{price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartContent;
