import { combineReducers, configureStore } from "@reduxjs/toolkit";
import brandsReducer from "./brands";
import productsReducer from "./products";
import userReducer from "./user";
import ordersReducer from "./order";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
    products: productsReducer,
    brands: brandsReducer,
    user: userReducer,
    orders: ordersReducer,
    categories: categoriesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
