import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChainsawScreen from './screens/ChainsawScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';

function App() {

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="container">
                        <div>
                            <img className="askvs-logo" src={require('./logos/logo/small_logo.png')} alt="small logo" />
                        </div>
                    </div>
                    <div className="">
                        <nav className="">
                            {/* nav */}
                            <div className="header-links">
                                <Link to="/">Home</Link>
                                <Link to="/chainsaws">Husqvarna</Link>
                                <a href="/">Съвети</a>
                                <a href="/">Сервиз</a>
                                <a href="/">Въпроси</a>
                                <a href="/">Контакти</a>
                            </div>
                        </nav>
                    </div>
                    <div className="header-links">
                        <a href="/cart">Количка</a>
                    </div>
                </header>
                <main className="main">
                    <div className="content">
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/chainsaws" component={ChainsawScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />
                    </div>
                </main>
                <footer className="footer bg-pimary-color">
                    All rights reserved for askVS LTD / 2020
                </footer>
            </div>
        </BrowserRouter>
    );

}

export default App;
