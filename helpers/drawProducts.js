import { params } from "./variable.js";
import { fetchAPI } from "./fetchAPI.js";
import { getLimit } from "./getLimit.js";
import { API_PRODUCT } from "./constant.js";

export const drawProducts = async () => {
    let category = "";
    if (params.category != "" && params.category != "All"){
        category = `&category=${params.category}`
    }
    const api = `${API_PRODUCT}?q=${params.q}&_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.type}${category}`
    getLimit(`http://localhost:3000/products?q=${params.q}&_sort=${params.sort}&_order=${params.type}${category}`);
    fetchAPI(api)
        .then((data) => {
            const arr = data.map((item) => {
                return `
            <div class="product-item">
                <div class="inner-img">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="inner-info">
                    <div class="inner-title">
                        ${item.title}
                    </div>
                    <div class="inner-cost">
                        <div class="inner-price">
                            ${item.price}$
                        </div>
                        <div class="inner-stock">
                            Còn lại ${item.stock} sp
                        </div>
                    </div>
                </div>
                <div class="inner-discount">
                    ${item.discountPercentage}%
                </div>
            </div>
            `;
            });
            params.productList.innerHTML = arr.join("");
        })
}