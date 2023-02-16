import httpService from "./http.service";
// import localStorageService from "./localStorage.service";

const brandEndpoint = "brand/";

const brandService = {
    get: async () => {
        const { data } = await httpService.get(brandEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            brandEndpoint + payload._id,
            payload
        );
        return data;
    },
    getBrandUser: async (id) => {
        const { data } = await httpService.get(brandEndpoint + id);
        return data;
    },
    getBrandByCategory: async (query) => {
        const { data } = await httpService.get(brandEndpoint + query);
        return data;
    },
    update: async (payload, id) => {
        const { data } = await httpService.patch(brandEndpoint + id, payload);
        return data;
    }
};
export default brandService;
