const mongoose = require('mongoose');
const Book = require("../api/models/book.model");

const dotenv = require('dotenv');
dotenv.config();

const book = [
    //!   -- 1 --
    {
        name: "Toy Story",
        author: "Mario Romero",
        cover: "https://i.imgur.com/whRAKhX.jpeg",
    },
    //!   -- 2 --
    {
        name: "Ant-Man",
        author: "Javier Ruiz",
        cover: "https://i.imgur.com/Ot8jhB5.jpeg",
    },
    //!   -- 3 --
    {
        name: "Black Swan",
        author: "Borja Checa",
        cover: "https://i.imgur.com/pyao4KV.jpeg",
    },
    //!   -- 4 --
    {
        name: "Blade Runner",
        author: "Carolina Rosillo",
        cover: "https://i.imgur.com/pG50DHq.jpeg",
    },
    //!   -- 5 --
    {
        name: "Breaking Bad",
        author: "Jose Manuel Alcañiz",
        cover: "https://i.imgur.com/nY5esNj.jpeg",
    },
    //!   -- 6 --
    {
        name: "El Viaje de Chihiro",
        author: "Belén Santos",
        cover: "https://i.imgur.com/qQZjIts.jpeg",
    },
    //!   -- 7 --
    {
        name: "Crank",
        author: "Jesús Ortega",
        cover: "https://i.imgur.com/LD8gnmb.jpeg",
    },
    //!   -- 8 --
    {
        name: "E.T.",
        author: "Diego Durán",
        cover: "https://i.imgur.com/JecdTAX.jpeg",
    },
    //!   -- 9 --
    {
        name: "El Club de la Lucha",
        author: "Raquel Rojo",
        cover: "https://i.imgur.com/OENMseE.jpeg",
    },
    //!   -- 10 --
    {
        name: "El Padrino",
        author: "María Cabrero",
        cover: "https://i.imgur.com/tUuQKvk.png",
    },
    //!   -- 11 --
    {
        name: "El Señor de los Anillos",
        author: "Emilio Prado",
        cover: "https://i.imgur.com/prrWllN.jpeg",
    },
    //!   -- 12 --
    {
        name: "El Silencio de los Corderos",
        author: "Cristina Rodriguez",
        cover: "https://i.imgur.com/qPoe0Kh.jpeg",
    },
    //!   -- 13 --
    {
        name: "Fast and Furious: Tokyo Race",
        author: "Daniel Medina",
        cover: "https://i.imgur.com/ECLKSSH.jpeg",
    },
    //!   -- 14 --
    {
        name: "Ghostbusters",
        author: "Saray Lopez",
        cover: "https://i.imgur.com/nJB0KGh.jpeg",
    },
    //!   -- 15 --
    {
        name: "Godzilla",
        author: "Eduardo Dumond",
        cover: "https://i.imgur.com/gLwy5n9.jpeg",
    },
    //!   -- 16 --
    {
        name: "It",
        author: "Claudia Agapito",
        cover: "https://i.imgur.com/ZTQasLA.jpeg",
    },
    //!   -- 17 --
    {
        name: "John Wick 2",
        author: "Oscar Valbona",
        cover: "https://i.imgur.com/ZM2ssMN.jpeg",
    },
    //!   -- 18 --
    {
        name: "Jurassic Park",
        author: "David Ferrer",
        cover: "https://i.imgur.com/mQSxsxl.jpeg",
    },
    //!   -- 19 --
    {
        name: "Kill Bill",
        author: "Nacho Diaz",
        cover: "https://i.imgur.com/9dLFfnQ.jpeg",
    },
    //!   -- 20 --
    {
        name: "La Casa de Papel",
        author: "Estefanía Gomez",
        cover: "https://i.imgur.com/Duthcxk.jpeg",
    },
    //!   -- 21 --
    {
        name: "Malditos Bastardos",
        author: "Miguel Morera",
        cover: "https://i.imgur.com/8YikcV4.jpeg",
    },
    //!   -- 22 --
    {
        name: "Mr. Robot",
        author: "Carlos Cerdán",
        cover: "https://i.imgur.com/NYMlKtm.jpeg",
    },
    //!   -- 23 --
    {
        name: "Narcos",
        author: "David Martínez",
        cover: "https://i.imgur.com/RSxmZ9j.png",
    },
    //!   -- 24 --
    {
        name: "Origen",
        author: "Félix Soto",
        cover: "https://i.imgur.com/B60pVz5.jpeg",
    },
    //!   -- 25 --
    {
        name: "Pulp Fiction",
        author: "Noel Aguilar",
        cover: "https://i.imgur.com/rMcNz2R.jpeg",
    },
    //!   -- 26 --
    {
        name: "Reservoir Dogs",
        author: "Vicente Rivera",
        cover: "https://i.imgur.com/omM9cV8.jpeg",
    },
    //!   -- 27 --
    {
        name: "Return of the Jedi",
        author: "Ramiro Calderón",
        cover: "https://i.imgur.com/vSozgIP.jpeg",
    },
    //!   -- 28 --
    {
        name: "La Lista de Schindler",
        author: "María Carrera",
        cover: "https://i.imgur.com/9nQd0pJ.jpeg",
    },
    //!   -- 29 --
    {
        name: "Shutter Island",
        author: "Javier Sepúlveda",
        cover: "https://i.imgur.com/wiX1mN2.jpeg",
    },
    //!   -- 30 --
    {
        name: "Hijos de la Anarquía",
        author: "Julián García",
        cover: "https://i.imgur.com/rea9L6M.jpeg",
    },
    //!   -- 31 --
    {
        name: "El Juego del Calamar",
        author: "Moises Cañas",
        cover: "https://i.imgur.com/pmOv8Om.jpeg",
    },
    //!   -- 32 --
    {
        name: "La Amenaza Fantasma",
        author: "Carlos Ferrando",
        cover: "https://i.imgur.com/oC4YoMq.jpeg",
    },
    //!   -- 33 --
    {
        name: "El ataque de los Clones",
        author: "Gabriel Granados",
        cover: "https://i.imgur.com/ZKLiz4P.jpeg",
    },
    //!   -- 34 --
    {
        name: "La Venganza de los Sith",
        author: "Aitor Menta",
        cover: "https://i.imgur.com/bKQ9lsX.jpeg",
    },
    //!   -- 35 --
    {
        name: "El Despertar de la Fuerza",
        author: "Belinda Rodriguez",
        cover: "https://i.imgur.com/BfQttV3.jpeg",
    },
    //!   -- 36 --
    {
        name: "Star Wars",
        author: "Oriol Torrejón",
        cover: "https://i.imgur.com/jZovmor.jpeg",
    },
    //!   -- 37 --
    {
        name: "Terminator",
        author: "Jairo Manzanares",
        cover: "https://i.imgur.com/THQINma.jpeg",
    },
    //!   -- 38 --
    {
        name: "El Imperio Contraataca",
        author: "Victor Jordan",
        cover: "https://i.imgur.com/aaXBRNW.jpeg",
    },
    //!   -- 39 --
    {
        name: "Los Increibles 2",
        author: "Jesús Mateos",
        cover: "https://i.imgur.com/APVB6jF.jpeg",
    },
    //!   -- 40 --
    {
        name: "Fear the Walking Dead",
        author: "Florentino Moran",
        cover: "https://i.imgur.com/nIqxZzy.jpeg",
    },
    //!   -- 41 --
    {
        name: "Titanic",
        author: "Omar Maestre",
        cover: "https://i.imgur.com/Ra4u8Os.jpeg",
    },
    //!   -- 42 --
    {
        name: "Top Gun",
        author: "Angel Santana",
        cover: "https://i.imgur.com/9kQozKv.jpeg",
    },

];

mongoose
    .connect(" mongodb+srv://admin:987654321@cluster0.rfnpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {

        const allBooks = await Book.find();

        if (allBooks.length) {
            await Book.collection.drop();
            console.log('Drop database')
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {

        await Book.insertMany(book);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))

    .finally(() => mongoose.disconnect());