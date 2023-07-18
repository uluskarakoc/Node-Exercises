import { Router } from "express";
import { deleteBook, getBooks, postBooks, updateBook } from "../controller/bookController.js";

// Wir müssen den Router initialisieren.
const bookRouter = Router(); 

bookRouter
    .get("/books", getBooks)
    .post("/books", postBooks)
    .patch("/book/:id", updateBook)
    .delete("/book/:id", deleteBook);

export default bookRouter;