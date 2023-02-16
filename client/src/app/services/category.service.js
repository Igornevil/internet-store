import httpService from "./http.service";
// import localStorageService from "./localStorage.service";

const categoryEndpoint = "category/";

const categoryService = {
    get: async () => {
        const { data } = await httpService.get(categoryEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            categoryEndpoint + payload._id,
            payload
        );
        return data;
    },
    getCategoryById: async (id) => {
        const { data } = await httpService.get(categoryEndpoint + id);
        return data;
    },
    update: async (payload, id) => {
        const { data } = await httpService.patch(
            categoryEndpoint + id,
            payload
        );
        return data;
    }
};
export default categoryService;
