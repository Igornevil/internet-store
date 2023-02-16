const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-local-id";

const CART = "Cart";

export function setTokens({
    refreshToken,
    accessToken,
    userId,
    expiresIn = 3600
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(USERID_KEY, userId);
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
}
export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}
export function removeAuthData() {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}
export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

export function setCartItem(item) {
    let temp = JSON.parse(getCartItem());
    if (!temp) {
        temp = [];
    }
    const elem = temp.findIndex((el) => el._id === item._id);
    if (elem >= 0) {
        temp[elem].count++;
    } else {
        temp.push({
            ...item,
            count: 1
        });
    }
    localStorage.setItem(CART, JSON.stringify(temp));
}
export function getCartItem() {
    return localStorage.getItem(CART);
}
export function removeCartItem(id) {
    const items = JSON.parse(getCartItem());
    const filterItems = items.filter((el) => el._id !== id);
    localStorage.setItem(CART, JSON.stringify(filterItems));
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeAuthData,
    setCartItem,
    getCartItem,
    removeCartItem
};
export default localStorageService;
