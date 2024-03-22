import { params } from "./variable.js";
import { drawProducts } from "./drawProducts.js";


export const selectOption = () => {
    if (params.selection.value == 'mac-dinh'){
        params.sort = "";
        params.type = "";
    }
    else if (params.selection.value == 'thap-den-cao'){
        params.sort = "price";
        params.type = "asc";
    }
    else if (params.selection.value == 'cao-den-thap'){
        params.sort = "price";
        params.type = "desc";
    }
    else {
        params.sort = "discountPercentage";
        params.type = "desc";
    }
    params.page = 1;
    params.num.innerHTML = 1;
    drawProducts();
}