import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

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
                                <div>
                                    <img src={item.image} alt="product" />
                                    <div className="cart-name">
                                        {item.name}
                                    </div>
                                    <div>
                                        Количество:
                                    <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                </div>
                            )
                    }

                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Общо количество ( {cartItems.reduce((a, c) => a + c.qty, 0)} бр. )
                    : {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} лв.
                </h3>
                <button className="button-primary" disabled={cartItems.length === 0}>
                    Завърши покупката!
                </button>
            </div>
        </div>)
}

export default CartScreen;
