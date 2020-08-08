import React from 'react';

function HomeScreen(props) {

    return (<div>

        <div className="site-slider">
            <div className="slider-one">
                <div>
                    <img
                        src={require('../assets/banners/chainsaw/resized-chainsaw-banner.png')}
                        alt="chainsaw"
                    />
                </div>
                <div>
                    <img
                        src={require('../assets/banners/brushcutter/scaled-accu-brushcutter.png')}
                        alt="brushcutter"
                    />
                </div>
                <div>
                    <img
                        src={require('../assets/banners/automower/resized-automower-banner.png')}
                        alt="automower"
                    />
                </div>
            </div>
        </div>
    </div>)
}

export default HomeScreen;
