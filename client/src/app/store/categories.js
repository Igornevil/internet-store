import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";
import { nanoid } from "nanoid";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true;
        },
        categoriesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        categoryAdd: (state, action) => {
            if (!state.entities.length) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        categoryAddFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const {
    categoriesReceived,
    categoriesRequested,
    categoriesRequestFailed,
    categoryAddFailed,
    categoryAdd
} = actions;

export const loadCategoriesList = () => async (dispatch) => {
    dispatch(categoriesRequested());
    try {
        const data = await categoryService.get();
        dispatch(categoriesReceived(data));
    } catch (error) {
        dispatch(categoriesRequestFailed(error.message));
    }
};

export const addCategory = (payload) => async (dispatch) => {
    try {
        const temp = {
            _id: nanoid(),
            name: payload
        };

        const data = await categoryService.create(temp);
        dispatch(categoryAdd(data));
    } catch (error) {
        dispatch(categoryAddFailed(error.message));
    }
};

export const getCategories = () => (state) => state.categories.entities;
export const getLoadingStatusCategory = () => (state) =>
    state.categories.isLoading;

export default categoriesReducer;
