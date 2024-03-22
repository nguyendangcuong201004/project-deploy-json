export const fetchAPI = async (api) => {
    const data = fetch(api)
        .then((respone) => {
            return respone.json();
        })
        .then((test) => {
            return test;
        })
    return data;
};