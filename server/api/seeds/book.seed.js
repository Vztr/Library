const mongoose = require('mongoose');
const Book = require("../api/models/book.model");

const dotenv = require('dotenv');
dotenv.config();

const book = [
    //!   -- 1 --
    {
        name: "El Señor de los Anillos",
        author: "Mario Romero",
        cover: "https://i.imgur.com/Tb7ZSpE.jpg",
    },
    //!   -- 2 --
    {
        name: "La casa de papel",
        author: "Javier Ruiz",
        cover: "https://i.imgur.com/ZBuHi0t.jpg",
    },
    //!   -- 3 --
    {
        name: "Pulp Fiction",
        author: "Borja Checa",
        cover: "https://i.imgur.com/E0GoXqO.jpg",
    },
    //!   -- 4 --
    {
        name: "GhostBusters",
        author: "Carolina Rosillo",
        cover: "https://i.imgur.com/BoK66o2.jpg",
    },
    //!   -- 5 --
    {
        name: "El viaje de Chihiro",
        author: "Jose Manuel Alcañiz",
        cover: "https://i.imgur.com/uTANzIA.jpg",
    },
    //!   -- 6 --
    {
        name: "Ant-Man",
        author: "Belén Santos",
        cover: "https://i.imgur.com/TU003TN.jpg",
    },
    //!   -- 7 --
    {
        name: "Top Gun",
        author: "Jesús Chus",
        cover: "https://i.imgur.com/azeaHE6.jpg",
    },
    //!   -- 8 --
    {
        name: "Kill Bill",
        author: "Diego Durán",
        cover: "https://i.imgur.com/tJZ723R.jpg",
    },
    //!   -- 9 --
    {
        name: "Batman Returns",
        author: "Raquel Rojo",
        cover: "https://i.imgur.com/xwtoChY.jpg",
    },
    //!   -- 10 --
    {
        name: "Vértigo",
        author: "María Cabrero",
        cover: "https://i.imgur.com/uECDxg1.jpg",
    },
    //!   -- 11 --
    {
        name: "Detective Pikachu",
        author: "Emilio Prado",
        cover: "https://i.imgur.com/YNREz8J.png",
    },
    //!   -- 12 --
    {
        name: "El juego del calamar",
        author: "Cristina Rodriguez",
        cover: "https://i.imgur.com/cjJZDiD.jpg",
    },
    //!   -- 13 --
    {
        name: "Reservoir Dogs",
        author: "Daniel Medina",
        cover: "https://i.imgur.com/phAIocj.png",
    },
    //!   -- 14 --
    {
        name: "El Rey León",
        author: "Saray Lopez",
        cover: "https://i.imgur.com/Qd5mKTI.jpg",
    },
    //!   -- 15 --
    {
        name: "Cisne Negro",
        author: "Eduardo Dumond",
        cover: "https://i.imgur.com/oziriaE.jpg",
    },
    //!   -- 16 --
    {
        name: "Terminator",
        author: "Claudia Agapito",
        cover: "https://i.imgur.com/ROeEItC.jpg",
    },
    //!   -- 17 --
    {
        name: "MR. Robot",
        author: "Oscar Valbona",
        cover: "https://i.imgur.com/xqEGOg5.jpg",
    },
    //!   -- 18 --
    {
        name: "Hora de Aventuras",
        author: "David Ferrer",
        cover: "https://i.imgur.com/rJc1udd.jpg",
    },
    //!   -- 19 --
    {
        name: "Juego de Tronos",
        author: "Nacho Diaz",
        cover: "https://i.imgur.com/qwpNLZx.jpg",
    },
    //!   -- 20 --
    {
        name: "Peaky Blinders",
        author: "Estefanía Gomez",
        cover: "https://i.imgur.com/X36zTwi.jpg",
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