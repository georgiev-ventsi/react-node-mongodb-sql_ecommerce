import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

        const openMenu = () => {
            document.querySelector(".sidebar").classList.add("open")
        }

        const closeMenu = () => {
            document.querySelector(".sidebar").classList.remove("open")
        }

        return (
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
                      <ul className="products">
                          <li>
                              <div className="product">
                                  <img className="product-image" src="./images/am105.png" alt="automower 105" />
                                  <div className="product-name"><a href="product.html">Automower 105</a></div>
                                  <div className="product-brand">Husqvarna</div>
                                  <div className="product-price">2540,00 лв.</div>
                                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                              </div>
                          </li>
                          <li>
                              <div className="product">
                                  <img className="product-image" src="./images/am105.png" alt="automower 105" />
                                  <div className="product-name"><a href="product.html">Automower 105</a></div>
                                  <div className="product-brand">Husqvarna</div>
                                  <div className="product-price">2540,00 лв.</div>
                                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                              </div>
                          </li>
                          <li>
                              <div className="product">
                                  <img className="product-image" src="./images/am105.png" alt="automower 105" />
                                  <div className="product-name"><a href="product.html">Automower 105</a></div>
                                  <div className="product-brand">Husqvarna</div>
                                  <div className="product-price">2540,00 лв.</div>
                                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                              </div>
                          </li>
                          <li>
                              <div className="product">
                                  <img className="product-image" src="./images/am105.png" alt="automower 105" />
                                  <div className="product-name"><a href="product.html">Automower 105</a></div>
                                  <div className="product-brand">Husqvarna</div>
                                  <div className="product-price">2540,00 лв.</div>
                                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                              </div>
                          </li>
                          <li>
                              <div className="product">
                                  <img className="product-image" src="./images/am105.png" alt="automower 105" />
                                  <div className="product-name"><a href="product.html">Automower 105</a></div>
                                  <div className="product-brand">Husqvarna</div>
                                  <div className="product-price">2540,00 лв.</div>
                                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                              </div>
                          </li>
                          <li>
                              <div className="product">
                                  <img className="product-image" src="./images/am105.png" alt="automower 105" />
                                  <div className="product-name"><a href="product.html">Automower 105</a></div>
                                  <div className="product-brand">Husqvarna</div>
                                  <div className="product-price">2540,00 лв.</div>
                                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                              </div>
                          </li>
                      </ul>
                  </div>
          </main>
          <footer className="footer">
              All rights reserved.
          </footer>
      </div>
        );

}

export default App;
