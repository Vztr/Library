import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <><div className="Home_Container">
            <img style={{width:"100%", margin:0, padding:0}} src="https://i.imgur.com/pdDQQpE.png" alt="Background"></img>
            <img style={{width:"40%", display:"block", marginLeft:"auto", marginRight:"auto"}} src="https://i.imgur.com/B4Qtt6G.png" alt="Background"></img>
        </div>
            <div className="text">
                <p><strong>Descripción del proyecto:</strong></p>
                <p>Infinite Books nace de la idea de tres jóvenes programadores, que decidieron llevar el mundo de los libros al siguiente nivel.
                    Las nuevas tecnologías avanzan constantemente, por lo que pensamos que el sector editorial no debe ser menos.
                    La intención de Infinite Books es, proporcionar toda serie de facilidades al usuario a la hora de poder leer el libro que éste deseé.
                    Su plataforma cuenta con una amplia cantidad de libros, desde los más antiguos, hasta los más actuales.
                    El consumidor podrá visulizar toda la información completa del libro (editorial, año de lanzamiento, género, etc), y con un solo click, descargarlo en formato PDF, para que pueda leerlo en cualquier parte: desde su tablet, ordenador o móvil, así de sencillo.</p>
                    <p>Además, el usuario estará en continua interacción con la app, lo que hará que disfrute de una experiencia única y agradable.</p>
                <p>Para todos los dipositivos móviles, es totalmente gratuita. También queremos saber cual es vuestra opinión y esperamos que sea la mejor valorada </p>
            </div></>
    )
}

export default Home
