import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";


const adapter = new JSONFile("./db.json");
const defaultData = [{}];
const db = new Low(adapter, defaultData);
await db.read();



//express
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(db.data);
});

app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * db.data.length);

  const randomMovie = db.data[randomIndex];
  res.send(randomMovie);
});

app.get("/:title", (req, res) => {
  const movieTitle = req.params.title;


  const movie = db.data.find((movie) => movie.title.toLowerCase() === movieTitle.toLowerCase());

  if (!movie) {
    // film nicht gefunden
    res.send("Film nicht gefunden");
  } else {
    res.send(movie);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port 3000`);
});

//lehrer lösung
// import express from "express";
// import db from "./lowdbConfig.js";

// await db.read(); // db.data bekommt Inhalt von db.json


// // *** Express-App erstellen ***

// const app = express();
// const PORT = 3000;

// // Alle Filme an Client senden
// app.get("/", (request, response) => {
//     response.send(db.data)
// })

// // zufälligen Film senden
// app.get("/random", (request, response) => {

//     // erzeuge einen zufälligen Index für das array
//     const randomIndex = Math.floor(Math.random() * db.data.length);

//     // speichere in randomMovie ein zufälliges Element
//     const randomMovie = db.data[randomIndex];
//     response.send(randomMovie);
// });


// // Film mit bestimmten Titel senden 
// app.get("/:title", (request, response) => {
//     const movieTitle = request.params.title;

//     // .toLowerCase: damit wir groß und Kleinschreibung ignorieren
//     const movie = db.data.find( movie => {
//         return movie.title.toLowerCase() === movieTitle.toLowerCase()
//     } );

//     if(!movie) { // Film nicht gefunden
//         response.send(`Film ${movieTitle} nicht gefunden`)
//     } else {
//         response.send(movie)
//     }
// })


// // Zusatzinfo
// // Falls Filme mit Leerzeichen nicht gefunden werden, kann man folgendes probieren
// // const decodedMovieName = decodeURIComponent(name);
// // console.log(decodedMovieName);
// // const movie = db.data.find((m) => m.name === decodedMovieName);


// app.listen(PORT, () => {
//     console.log(`Server läuft auf Port ${PORT}`)
// })
