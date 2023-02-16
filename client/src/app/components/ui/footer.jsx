import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <h4>Информация</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Главная</a>
                                </li>
                                <li>
                                    <a href="#">О магазине</a>
                                </li>
                                <li>
                                    <a href="#">Оплата и доставка</a>
                                </li>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-6">
                            <h4>Время работы</h4>
                            <ul className="list-unstyled">
                                <li>г. Киев, ул. Пушкина, 1</li>
                                <li>пн-вс: 9:00 - 18:00</li>
                                <li>без перерыва</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-6">
                            <h4>Контакты</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="tel:5551234567">555 123-45-67</a>
                                </li>
                                <li>
                                    <a href="tel:5551234568">555 123-45-68</a>
                                </li>
                                <li>
                                    <a href="tel:5551234569">555 123-45-69</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-6">
                            <h4>Мы в сети</h4>
                            <div className="footer-icons">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaYoutube />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
