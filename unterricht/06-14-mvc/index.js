import express from "express";
import { getBooks, getBestBook } from "./controller/bookController.js"
import { postBooks } from "./controller/bookController.js";

const app = express();
const PORT = 3000;

// da wir JSON vom Client erwarten, müssen wir das zuvor parsen
// damit es in request.body verfügbar ist
app.use( express.json() )

// getBooks wird als Controller ausgelagert
// Name "getBooks", da es sich um eine GET Methode handelt
app.get("/books", getBooks);
app.post("/books", postBooks)

app.get("/best-book", getBestBook)

app.listen(PORT, () => {
    console.log(`MVC Intro läuft auf ${PORT}`)
})