import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="grid-container">
          <header class="header">
            <div class="brand">
                <button class="brand-button" onclick="openMenu()">
                    <!-- ASCII hamburger menu -->
                    &#9776;
                </button>
                <a href="./index.html">Husqvarna</a>
            </div>
            <div class="header-links">
                <a href="cart.html">Количка</a>
                <a href="signin.html">ВЛЕЗ</a>
            </div>
        </header>
        <aside class="sidebar">
            <h3>Категории</h3>
            <button class="sidebar-close-button" onclick="closeMenu()">x</button>
            <ul>
                <li>
                    <a href="index.html">Косачки роботи</a>
                </li>
                <li>
                    <a href="index.html">Бензинови триони</a>
                </li>
            </ul>
        </aside>
        <main class="main">
            <div class="content">
                    <ul class="products">
                        <li>
                            <div class="product">
                                <img class="product-image" src="./images/am105.png" alt="automower 105">
                                <div class="product-name"><a href="product.html">Automower 105</a></div>
                                <div class="product-brand">Husqvarna</div>
                                <div class="product-price">2540,00 лв.</div>
                                <div class="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div class="product">
                                <img class="product-image" src="./images/am105.png" alt="automower 105">
                                <div class="product-name"><a href="product.html">Automower 105</a></div>
                                <div class="product-brand">Husqvarna</div>
                                <div class="product-price">2540,00 лв.</div>
                                <div class="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div class="product">
                                <img class="product-image" src="./images/am105.png" alt="automower 105">
                                <div class="product-name"><a href="product.html">Automower 105</a></div>
                                <div class="product-brand">Husqvarna</div>
                                <div class="product-price">2540,00 лв.</div>
                                <div class="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div class="product">
                                <img class="product-image" src="./images/am105.png" alt="automower 105">
                                <div class="product-name"><a href="product.html">Automower 105</a></div>
                                <div class="product-brand">Husqvarna</div>
                                <div class="product-price">2540,00 лв.</div>
                                <div class="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div class="product">
                                <img class="product-image" src="./images/am105.png" alt="automower 105">
                                <div class="product-name"><a href="product.html">Automower 105</a></div>
                                <div class="product-brand">Husqvarna</div>
                                <div class="product-price">2540,00 лв.</div>
                                <div class="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div class="product">
                                <img class="product-image" src="./images/am105.png" alt="automower 105">
                                <div class="product-name"><a href="product.html">Automower 105</a></div>
                                <div class="product-brand">Husqvarna</div>
                                <div class="product-price">2540,00 лв.</div>
                                <div class="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                    </ul>
                </div>
        </main>
        <footer class="footer">
            All rights reserved.
        </footer>
    </div>

  );
}

export default App;
