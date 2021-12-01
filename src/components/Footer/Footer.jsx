import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                    <h5 className="widget-title"><span>INFINITE BOOKS</span></h5>
                                    <p>About the company, little discription will goes here.. </p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title"><span>Proyecto realizado con las siguientes herramientas:</span></h5>
                                    <ul className="thumbnail-widget">
                                        <li>
                                            <div className="thumb-content"><a href="#.">React</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Mongo DB</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">HTML & CSS</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Event/Tickets</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">News</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="widget-title"><span>Contact Us</span></h5>

                                    <p><a href="mailto:info@infiniteposters.com" title="glorythemes">info@infiniteposters.com</a></p>
                                    <ul className="social-footer2">
                                        <li className=""><a href="#"></a></li>
                                        <li className=""><a href="#"></a></li>
                                        <li className=""><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;