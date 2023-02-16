import React from "react";
import Categori from "./categori";
import PropTypes from "prop-types";

const CategoriesList = ({ categories, handleChange }) => {
    return (
        <>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                    >
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            Бренд
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="accordion-body">
                            {categories.map((el) => (
                                <Categori
                                    key={el._id}
                                    name={el.name}
                                    id={el._id}
                                    handleChange={handleChange}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
CategoriesList.propTypes = {
    categories: PropTypes.array,
    handleChange: PropTypes.func
};

export default CategoriesList;
