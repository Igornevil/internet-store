import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";

let initialState = {
    entities: null,
    isLoading: true,
    error: null
};

if (localStorageService.getCartItem()) {
    const item = JSON.parse(localStorageService.getCartItem());
    if (item.length === 0) {
        initialState = {
            entities: item,
            isLoading: true,
            error: null
        };
    } else {
        initialState = {
            entities: item,
            isLoading: false,
            error: null
        };
    }
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        ordersRequested: (state) => {
            state.isLoading = true;
        },
        ordersReceived: (state, action) => {
            state.isLoading = false;
        },
        ordersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        ordersAddCart: (state, action) => {
            if (!state.entities) {
                state.entities = [];
            }
            const temp = state.entities.find(
                (el) => el._id === action.payload._id
            );
            if (temp) {
                temp.count++;
            } else {
                state.entities.push({ ...action.payload, count: 1 });
            }
            state.isLoading = false;
        },
        orderRemove: (state, action) => {
            state.entities = state.entities.filter(
                (el) => el._id !== action.payload
            );
            if (state.entities === []) {
                state.entities = null;
            }
        }
    }
});

const { reducer: ordersReducer, actions } = ordersSlice;
const { ordersRequested, ordersAddCart, orderRemove } = actions;

export const addOrder = (payload) => (dispatch) => {
    dispatch(ordersRequested());
    dispatch(ordersAddCart(payload));

    localStorageService.setCartItem(payload);
};

export const removeOrder = (payload) => (dispatch) => {
    dispatch(orderRemove(payload));
    localStorageService.removeCartItem(payload);
};

export const getOrders = () => (state) => {
    return state.orders.entities;
};

export const getOrdersLoadingStatus = () => (state) => {
    return state.orders.isLoading;
};

export default ordersReducer;
