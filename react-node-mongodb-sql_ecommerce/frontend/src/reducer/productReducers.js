import { PRODUCT_LIST_REQEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
     PRODUCT_DETAILS_REQEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

function productListReducer( state = {products: []}, action){
    switch (action.type) {
        case PRODUCT_LIST_REQEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

function productDetailstReducer( state = {product: {}}, action){
    switch (action.type) {
        case PRODUCT_DETAILS_REQEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}


export {productListReducer, productDetailstReducer}
