import React from "react";
import PropTypes from "prop-types";

const Categori = ({ name, id, handleChange }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value={name}
                id={id}
                onChange={handleChange}
                // checked={value}
            />
            <label className="form-check-label d-flex" htmlFor={name}>
                {name}
            </label>
        </div>
    );
};
Categori.propTypes = {
    name: PropTypes.string,
    handleChange: PropTypes.func,
    id: PropTypes.string
};

export default Categori;
