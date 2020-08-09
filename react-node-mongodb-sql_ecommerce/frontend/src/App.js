import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Navigation
import Nav from "./components/Nav";

// Screens
import ChainsawScreen from './screens/ChainsawScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';

function App() {

    return (
        <BrowserRouter>
            <div className="grid-container">
                <Nav />
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
