import React from 'react';
import "../index.css"

const Footer = () => {
    return (<div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>Hives memes inc.</h4>
                    <ul className="list-unstyled">
                        <li>Канара 7 ЕООД</li>
                        <li>+359 898 717 441</li>
                        <li> гр.София, жк. "Лев Толстой", бл. 32</li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4>STUFF</h4>
                    <ul>
                        <li>SOME STUFF</li>
                        <li>MY MEME</li>
                        <li>U ARE MEME</li>
                    </ul>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>STUFF</h4>
                    <ul>
                        <li>SOME STUFF</li>
                        <li>MY MEME</li>
                        <li>U ARE MEME</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Kanara LTD | All right reserved | Terms of service | Privacy
                </p>
            </div>
        </div>
    </div>)
}

export default Footer;