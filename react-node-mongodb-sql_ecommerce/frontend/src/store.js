import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailstReducer } from './reducer/productReducers';

const initalState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailstReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initalState, composeEnhancer(applyMiddleware(thunk)));
export default store;
