import {
    PRODUCT_LIST_REQEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";
import axios from 'axios';

// chainsaws
const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQEST });
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }

}

const detailsProduct = (productID) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQEST, payload: productID });
        const { data } = await axios.get("/api/products/" + productID);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}

// Brushcutters-----------------------------------
const listBrushcutters = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQEST });
        const { data } = await axios.get("/api/brushcutters");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const detailsBrushcutters = (productID) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQEST, payload: productID });
        const { data } = await axios.get("/api/brushcutters/" + productID);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}

// Automower-----------------------------------
const listAutomowers = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQEST });
        const { data } = await axios.get("/api/automowers");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const detailsAutomowers = (productID) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQEST, payload: productID });
        const { data } = await axios.get("/api/automowers/" + productID);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}

export { listProducts, detailsProduct, listBrushcutters, detailsBrushcutters, listAutomowers, detailsAutomowers }
