import { fetchAPI } from "./fetchAPI.js"
import { params } from "./variable.js";

export const getLimit = (api) => {
    fetchAPI(api)
        .then((data) => {
            params.many = data.length / params.limit;
        })
}