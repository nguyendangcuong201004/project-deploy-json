import { fetchAPI } from "./fetchAPI.js";
import { params } from "./variable.js";
import { drawCategory } from "./drawCategory.js";
import { drawProducts } from "./drawProducts.js";
import { selectOption } from "./selection.js";

drawCategory();

drawProducts();

// Tinh nang tim kiem san pham////////////////////////////////////////////////////////////////////

const search = () => {
    params.q = params.input.value;
    drawProducts();
}

params.button.addEventListener("click", () => {
    search()
})

params.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        search();
    }
})

// Tinh nang tim kiem san pham///////////////////////////////////////////////////////////////////////



// Tinh Nang phan trang san pham/////////////////////////////////////////////////////////////////////

params.prev.addEventListener("click", () => {
    if (params.page == 1) {
        return;
    }
    params.page -= 1;
    params.num.innerHTML = params.page;
    drawProducts();
})

params.next.addEventListener("click", () => {
    if (params.page < params.many){
        params.page += 1;
        params.num.innerHTML = params.page
        drawProducts();
    }
})

// Tinh Nang phan trang san pham////////////////////////////////////////////////////////////////////////


// Tinh nang chon select option//////////////////////////////////////////////////////////////////////////

params.selection.addEventListener("change", () => {
    selectOption()
})

// Tinh nang chon select option//////////////////////////////////////////////////////////////////////////////
