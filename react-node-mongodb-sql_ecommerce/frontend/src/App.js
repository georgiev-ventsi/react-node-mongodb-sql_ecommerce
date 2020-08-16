import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Screens
import ChainsawScreen from './screens/ChainsawScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import BrushcutterScreen from './screens/BrushcutterScreen';
import AutomowerScreen from './screens/AutomowerScreen'
import PowersawsScreen from './screens/PowersawScreen'

function App() {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <BrowserRouter>
                    <Nav />
                    <main className="main">
                        <div className="content">
                            <Route path="/product/:id" component={ProductScreen} />
                            <Route path="/cart/:id?" component={CartScreen} />
                            <Route path="/chainsaws" component={ChainsawScreen} />
                            <Route path="/brushcutters" component={BrushcutterScreen} />
                            <Route path="/automowers" component={AutomowerScreen} />
                            <Route path="/powersaws" component={PowersawsScreen} />
                            <Route path="/" exact={true} component={HomeScreen} />
                        </div>
                    </main>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );

}

export default App;
