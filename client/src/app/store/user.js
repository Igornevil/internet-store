import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import { history } from "../utils/history";
import { generateAuthError } from "../utils/generateAuthError";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          currentUser: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          currentUser: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userRequested: (state) => {
            state.isLoading = true;
        },
        userRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        userUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
            ] = action.payload;
        },
        authRequested: (state) => {
            state.error = null;
        },
        currentUserReceived: (state, action) => {
            state.currentUser = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        }
    }
});

const { reducer: userReducer, actions } = userSlice;
const {
    userRequested,
    userRequestFailed,
    authRequestSuccess,
    authRequestFailed,
    userLoggedOut,
    userUpdateSuccessed,
    currentUserReceived
} = actions;

const authRequested = createAction("user/authRequested");
const userUpdateRequested = createAction("user/userUpdateRequested");
const userUpdateFailed = createAction("user/userUpdateFailed");

export const login =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const data = await authService.login({ email, password });
            console.log(data);
            dispatch(authRequestSuccess({ userId: data.localId }));
            localStorageService.setTokens(data);

            history.push(redirect);
        } catch (error) {
            const { code, message } = error.response.data.error;
            if (code === 400) {
                const errorMessage = generateAuthError(message);
                dispatch(authRequestFailed(errorMessage));
            } else {
                dispatch(authRequestFailed(error.message));
            }
        }
    };

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        history.push("/");
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};
export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    history.push("/");
};

export const loadCurrentUser = () => async (dispatch, getState) => {
    dispatch(userRequested());
    try {
        const data = await userService.getCurrentUser();
        dispatch(currentUserReceived(data));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};
export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested());
    try {
        const data = await userService.update(payload);
        dispatch(userUpdateSuccessed(data));
        history.push(`/`);
    } catch (error) {
        dispatch(userUpdateFailed(error.message));
    }
};

export const getCurrentUserData = () => (state) => state.user.currentUser;

export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getDataStatus = () => (state) => state.user.dataLoaded;
export const getUserLoadingStatus = () => (state) => state.user.isLoading;
export const getCurrentUserId = () => (state) => state.user.auth.userId;
export const getAuthErrors = () => (state) => state.user.error;

export default userReducer;
