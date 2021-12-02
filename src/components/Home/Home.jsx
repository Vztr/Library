import React from 'react';
import "../Home/Home.css"

const Home = () => {
    return (
        <><div className="Home_Container">
                <img className="img_home" src="https://i.imgur.com/Y16sWlR.png" alt="fondo"></img>
                <h3 className="title_description">Descripción del proyecto:</h3>
                <p className="description_home">
                    Infinite Posters nace de la idea de tres jóvenes programadores amantes del cine. La intención de Infinite Posters es, proporcionar toda serie de facilidades
                    al usuario a la hora de poder descargarse el poster de su película favorita. Su plataforma cuenta con una amplia cantidad de posters de series y películas,
                    desde las más antiguas, hasta las más recientes, {/*  El consumidor podrá visulizar toda la información completa de la película o serie y con un solo click */},
                    pudiendo descargarlos, así de sencillo.
                    Además, el usuario estará en continua interacción con la app, lo que hará que disfrute de una experiencia única y agradable.
                    Para todos los dipositivos móviles, es totalmente gratuita. También queremos saber cual es vuestra opinión y esperamos vuestra valoración.
                </p>
        </div></>
    )
}

export default Home
