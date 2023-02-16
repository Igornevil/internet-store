import React from "react";

const Slider = () => {
    return (
        <>
            <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide product-carousel"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="0">
                        <img
                            src="/img/mackbook/1.jpg"
                            className="d-block w-auto content-slider"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item" data-bs-interval="0">
                        <img
                            src="/img/mackbook/2.jpg"
                            className="d-block content-slider w-auto"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item" data-bs-interval="0">
                        <img
                            src="/img/mackbook/3.jpg"
                            className="d-block w-auto content-slider"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Slider;
