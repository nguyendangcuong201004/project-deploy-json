import { params } from "./variable.js";
import { fetchAPI } from "./fetchAPI.js";
import { drawProducts } from "./drawProducts.js";
import { API_CATEGORY } from "./constant.js";

export const drawCategory = async () => {
    const api = API_CATEGORY;
    fetchAPI(api)
        .then((data) => {
            const arr = data.map((item) => {
                return `
            <div class="category-item" category="${item}">
                ${item}
            </div>
            `;
            })
            params.categoryList.innerHTML = arr.join("");

            //Hiển thị danh mục sản phẩm, khi click vào danh mục thì data đổi lại theo danh mục đó.

            const category = params.categoryList.querySelectorAll(".category-item");
            category.forEach((item) => {
                item.addEventListener("click", () => {
                    params.category = item.getAttribute("category");
                    params.page = 1;
                    params.num.innerHTML = 1;
                    drawProducts();
                })
            })

            //Hiển thị danh mục sản phẩm, khi click vào danh mục thì data đổi lại theo danh mục đó.


        })
}