import { createSlice } from "@reduxjs/toolkit";
import brandService from "../services/brand.service";
import { nanoid } from "nanoid";

const brandsSlice = createSlice({
    name: "brands",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        brandsRequested: (state) => {
            state.isLoading = true;
        },
        brandsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        brandsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        brandAdd: (state, action) => {
            if (!state.entities.length) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        brandAddFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer: brandsReducer, actions } = brandsSlice;
const {
    brandsReceived,
    brandsRequested,
    brandsRequestFailed,
    brandAdd,
    brandAddFailed
} = actions;

export const loadBrandsList = () => async (dispatch) => {
    dispatch(brandsRequested());
    try {
        const data = await brandService.get();
        dispatch(brandsReceived(data));
    } catch (error) {
        dispatch(brandsRequestFailed(error.message));
    }
};

export const addBrand = (payload) => async (dispatch) => {
    try {
        const temp = {
            _id: nanoid(),
            ...payload
        };

        const data = await brandService.create(temp);
        dispatch(brandAdd(data));
    } catch (error) {
        dispatch(brandAddFailed(error.message));
    }
};

export const loadBrandsByCategory = (payload) => async (dispatch) => {
    dispatch(brandsRequested());
    try {
        const data = await brandService.getBrandByCategory(payload);
        dispatch(brandsReceived(data));
    } catch (error) {
        dispatch(brandsRequestFailed(error.message));
    }
};

export const getBrands = () => (state) => state.brands.entities;
export const getLoadingStatusBrand = () => (state) => state.brands.isLoading;

export default brandsReducer;
