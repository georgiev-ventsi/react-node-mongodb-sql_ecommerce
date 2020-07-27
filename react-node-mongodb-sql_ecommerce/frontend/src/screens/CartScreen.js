import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch(); 
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping")
    }

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container" >
                    <li>
                        <h3>Покупки</h3>
                        <div>Цена</div>
                    </li>
                    {
                        cartItems.length === 0 ?
                            <div>Кошницата е празна</div> :
                            cartItems.map(item =>
                                <li>
                                    <div className="cart-image">
                                        <img src={item.image} alt="product" />
                                    </div>
                                    <div className="cart-name">
                                        <div>
                                            <Link to={"/product/" + item.product}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            Количество:
                                            <select value={item.qty} onChange={(e)=> { dispatch(addToCart(item.product, e.target.value))}}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                                                Изтрий
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        {item.price} лв.
                                        </div>
                                </li>)
                    }

                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Общо количество ( {cartItems.reduce((a, c) => a + c.qty, 0)} бр. )
                    : {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} лв.
                </h3>
                <button onClick={checkoutHandler} className="button primary" disabled={cartItems.length === 0}>
                    Завърши покупката!
                </button>
            </div>
        </div>)
}

export default CartScreen;
