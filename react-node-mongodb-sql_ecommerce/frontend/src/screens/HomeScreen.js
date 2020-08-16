import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../index.css"

import ChainsawBanner from "../assets/banners/chainsaw/resized-chainsaw-banner.png";
import BrushcutterBanner from "../assets/banners/brushcutter/scaled-accu-brushcutter.png";
import AutomowerBanner from "../assets/banners/automower/resized-automower-banner.png";

import PowerSaw from "../assets/categories/husqvarna-images/powersaw.png";
import Brushcutter from "../assets/categories/husqvarna-images/brushcutter.png";
import Chainsaw from "../assets/categories/husqvarna-images/chainsaw.png"
import Automower from "../assets/categories/husqvarna-images/435awd.png"
import Hedgetrimmer from "../assets/categories/husqvarna-images/hedge.png"
import Blower from "../assets/categories/husqvarna-images/blower.png"

function HomeScreen(props) {

    const slideImages = [
        ChainsawBanner,
        BrushcutterBanner,
        AutomowerBanner
    ];

    const zoomOutProperties = {
        indicators: true,
        scale: 0.4
    }

    return (
        <div className="main-homescreen">
            <div className="slide-one" >
                <div className="slide-container">
                    <Slide {...zoomOutProperties}>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>

            {/* Categories */}
            <div className="main-categories">
                <div className="category">
                    <a href="/brushcutters">
                        <img
                            className="img-responsive"
                            src={Brushcutter}
                            alt="brushcutter"
                        />
                    </a>
                    <span class="tooltiptext">моторни коси</span>
                </div>
                <div className="category">
                    <a href="/chainsaws">
                        <img
                            className="img-responsive"
                            src={Chainsaw}
                            alt="chainsaw"
                        />
                    </a>
                    <span className="tooltiptext">моторни триони</span>
                </div>
                <div className="category">
                    <a href="/automowers">
                        <img
                            className="img-responsive"
                            src={Automower}
                            alt="automower"
                        />
                    </a>
                    <span className="tooltiptext">роботизирани косачки</span>
                </div>
                <div className="category">
                    <a href="/">
                        <img
                            className="img-responsive"
                            src={PowerSaw}
                            alt="powersaw"
                        /></a>
                    <span className="tooltiptext">дискови резачки</span>
                </div>
                <div className="category">
                    <img
                        className="img-responsive"
                        src={Hedgetrimmer}
                        alt="hedgetrimmer"
                    />
                    <span className="tooltiptext">ножици за жив плет</span>
                </div>
                <div className="category">
                    <img
                        className="img-responsive"
                        src={Blower}
                        alt="blower"
                    />
                    <span className="tooltiptext">моторни метли</span>
                </div>

            </div>
        </div>)
}

export default HomeScreen;
