import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChainsawScreen from './screens/ChainsawScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

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
                        <Link to="/">Home</Link>
                        <Link to="/chainsaws">Резачки Husqvarna</Link>

                    </div>
                    <div className="header-links">
                        <a href="/cart">Количка</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3 className="categories-tytle">Категории</h3>
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
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/chainsaws" component={ChainsawScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />
                    </div>
                </main>
                <footer className="footer">
                    All rights reserved for askVS LTD / 2020
                </footer>
            </div>
        </BrowserRouter>
    );

}

export default App;
