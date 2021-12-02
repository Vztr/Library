import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="grid-footer">
                <div>
                    <h3 className="titles_footer">INFINITE POSTERS</h3>
                    <p className="description">La aplicación para descargar los posters de tus películas y series favoritas</p>
                </div>

                <div>
                    <h3 className="titles_footer">App hecha con:</h3>
                    <nav className="footer-menu">
                        <a target="_blank" href="https://es.reactjs.org/">React</a>
                        <a target="_blank" href="https://www.mongodb.com/atlas/database">Mongo DB</a>
                        <a target="_blank" href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a>
                        <a target="_blank" href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a>
                    </nav>
                </div>

                {/* <div>
                    <h3 className="titles_footer">Soporte</h3>
                    <nav className="footer-menu">
                        <a href="#">Preguntas Frecuentes</a>
                        <a href="#">Ayuda en línea</a>
                        <a href="#">Confianza y Seguridad</a>
                    </nav>
                </div> */}

            </div>

            <p className="copyright">All rights reserved, INFINITE POSTERS™ 2021</p>
        </footer>
    );
};

export default Footer;