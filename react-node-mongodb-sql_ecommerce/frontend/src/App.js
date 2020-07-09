import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';




function App() {

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open")
    }

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button className="brand-button" onClick={openMenu}>
                            {/* <!-- ASCII hamburger menu --> */}
                      &#9776;
                  </button>
                        <a href="./index.html">Husqvarna</a>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Количка</a>
                        <a href="signin.html">ВЛЕЗ</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3 class="categories-tytle">Категории</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">Косачки роботи</a>
                        </li>
                        <li>
                            <a href="index.html">Бензинови триони</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/products/:id" component={ProductScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />

                        <ul className="products">
                            {
                                // render products
                                data.products.map(product =>
                                    <li>
                                        <div className="product">
                                            <img className="product-image" src={product.image} alt="automower 105" />
                                            <div className="product-name">
                                                <a href="product.html">"{product.name}</a>
                                            </div>
                                            <div className="product-brand">{product.brand}</div>
                                            <div className="product-price">{product.price} лв.</div>
                                            <div className="product-rating">{product.rating} Stars({product.numReviews})</div>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </main>
                <footer className="footer">
                    All rights reserved.
                </footer>
            </div>
        </BrowserRouter>
    );

}

export default App;
