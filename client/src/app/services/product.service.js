import httpService from "./http.service";

const productEndpoint = "product/";

const productService = {
    get: async () => {
        const { data } = await httpService.get(productEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(productEndpoint, payload);
        return data;
    },
    getProductById: async (id) => {
        const { data } = await httpService.get(productEndpoint + id);
        return data;
    },
    getProductByCategory: async (query) => {
        const { data } = await httpService.get(productEndpoint + query);
        return data;
    },
    update: async (payload, id) => {
        const { data } = await httpService.patch(productEndpoint + id, payload);
        return data;
    }
};
export default productService;
