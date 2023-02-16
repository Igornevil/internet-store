import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    loadBrandsList,
    getBrands,
    getLoadingStatusBrand,
    addBrand
} from "../../../store/brands";
import {
    loadCategoriesList,
    getCategories,
    getLoadingStatusCategory,
    addCategory
} from "../../../store/categories";
import { addProduct } from "../../../store/products";
// import httpService from "../../../services/http.service";

const AddProduct = () => {
    const [data, setData] = useState({
        category: "",
        brand: "",
        model: "",
        name: "",
        description: "",
        price: "",
        price_old: ""
    });

    const [addCat, setAddCat] = useState({
        categorySelect: "",
        category: "",
        brand: ""
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBrandsList());
        dispatch(loadCategoriesList());
    }, []);
    const brands = useSelector(getBrands());
    let brandsFilter = [];
    const categories = useSelector(getCategories());
    const loadingStatusBrands = useSelector(getLoadingStatusBrand());
    const loadingStatusCategory = useSelector(getLoadingStatusCategory());

    if (data.category) {
        brandsFilter = brands.filter((el) => el.category === data.category);
    }

    if (loadingStatusBrands || loadingStatusCategory) {
        return <div>Loading...</div>;
    }
    const handleChangeInput = (event) => {
        setAddCat((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };
    const handleChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };
    const handleChangeMini = (event) => {
        setAddCat((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    function handleAddCategory(event) {
        event.preventDefault();
        dispatch(addCategory(addCat.category));
        setAddCat({
            categorySelect: "",
            category: "",
            brand: ""
        });
    }

    function handleAddBrand(event) {
        event.preventDefault();
        const newData = {
            name: addCat.brand,
            category: addCat.categorySelect
        };
        dispatch(addBrand(newData));
        setAddCat({
            categorySelect: "",
            category: "",
            brand: ""
        });
    }

    async function handleSendForm(event) {
        event.preventDefault();

        dispatch(addProduct(data));
        console.log(data);
        setData({
            category: "",
            brand: "",
            model: "",
            name: "",
            description: "",
            price: "",
            price_old: 0
        });
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSendForm}>
                    {/* Первый элемент */}
                    <h3>Категория: </h3>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        name={"category"}
                        value={data.category}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            {"Choose..."}
                        </option>
                        {categories.map((el) => (
                            <option value={el._id} key={el._id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ввести новое значение"
                            aria-label="category"
                            value={addCat.category}
                            name={"category"}
                            onChange={handleChangeInput}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={handleAddCategory}
                        >
                            Добавить
                        </button>
                    </div>
                    {/* Второй элемент */}
                    <h3>Бренд: </h3>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        name={"brand"}
                        value={data.brand}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            {"Choose..."}
                        </option>
                        {brandsFilter.map((el) => (
                            <option value={el._id} key={el._id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                    <div className="input-group mb-3">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name={"categorySelect"}
                            value={addCat.categorySelect}
                            onChange={handleChangeMini}
                        >
                            <option disabled value="">
                                {"Choose..."}
                            </option>
                            {categories.map((el) => (
                                <option value={el.value} key={el._id}>
                                    {el.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ввести новое значение"
                            aria-label="type"
                            value={addCat.brand}
                            name={"brand"}
                            onChange={handleChangeInput}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={handleAddBrand}
                        >
                            Добавить
                        </button>
                    </div>
                    {/* Третий элемент */}
                    <span className="description-span">Модель: </span>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Введите модель"
                        aria-label="default input example"
                        value={data.model}
                        name={"model"}
                        onChange={handleChange}
                    />
                    {/* Четвертый элемент */}
                    <span className="description-span">Короткое имя: </span>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Введите короткое имя"
                        aria-label="default input example"
                        value={data.name}
                        name={"name"}
                        onChange={handleChange}
                    />
                    {/* Пятый элемент */}

                    <h3>Цена: </h3>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Цена"
                        aria-label="default input example"
                        value={data.price}
                        name={"price"}
                        onChange={handleChange}
                    />
                    {/* Шестой элемент */}
                    <h3>Описание: </h3>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            value={data.description}
                            name={"description"}
                            onChange={handleChange}
                        ></textarea>
                        <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary float-end mt-3"
                    >
                        Submit
                    </button>
                </form>
                <h1></h1>
            </div>
        </>
    );
};

export default AddProduct;
