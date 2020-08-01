import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
    productListReducer,
    productDetailstReducer
} from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducers';


const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailstReducer,
    cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
