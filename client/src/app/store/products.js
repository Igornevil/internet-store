import { createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        currentProduct: null,
        filteredEntities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        productReceived: (state, action) => {
            state.currentProduct = action.payload;
            state.isLoading = false;
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        filteredRequested: (state) => {
            console.log(state);
        },
        filteredAdd: (state, action) => {
            const result = state.entities.filter(
                (el) => el.brand === action.payload
            );
            if (state.filteredEntities) {
                state.filteredEntities = state.filteredEntities.concat(result);
            } else {
                state.filteredEntities = result;
            }
        },
        filteredRemove: (state, action) => {
            state.filteredEntities = state.filteredEntities.filter(
                (el) => el.brand !== action.payload
            );
        },
        filteredRemoveAll: (state) => {
            state.filteredEntities = null;
        },
        filteredRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        productAdd: (state, action) => {
            if (!state.entities) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        productAddFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer: productsReducer, actions } = productsSlice;
const {
    productsReceived,
    productReceived,
    productsRequested,
    productsRequestFailed,
    filteredAdd,
    filteredRemove,
    filteredRemoveAll,
    productAdd,
    productAddFailed
} = actions;

export const loadProductsList = () => async (dispatch) => {
    dispatch(productsRequested());
    try {
        const data = await productService.get();

        dispatch(productsReceived(data));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};
export const addProduct = (payload) => async (dispatch) => {
    try {
        const data = await productService.create(payload);
        dispatch(productAdd(data));
    } catch (error) {
        dispatch(productAddFailed(error.message));
    }
};
export const filterEntities = (payload) => async (dispatch) => {
    dispatch(filteredAdd(payload));
};
export const deFilterEntities = (payload) => (dispatch) => {
    dispatch(filteredRemove(payload));
};
export const getFilteredProducts = () => (state) => {
    if (state.products.filteredEntities) {
        return state.products.filteredEntities;
    }
    return "";
};
export const setFilteredRemoveAll = () => (dispatch) => {
    dispatch(filteredRemoveAll());
};

export const getProducts = () => (state) => state.products.entities;
export const getProduct = () => (state) => state.products.currentProduct;
export const loadProductById = (productId) => async (dispatch, state) => {
    dispatch(productsRequested());
    try {
        const data = await productService.getProductById(productId);
        dispatch(productReceived(data));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};
export const loadProductByCategory = (payload) => async (dispatch) => {
    dispatch(productsRequested());
    try {
        const data = await productService.getProductByCategory(payload);
        dispatch(productsReceived(data));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};

export const getLoadingStatus = () => (state) => state.products.isLoading;

export default productsReducer;
