import express from "express";
import { connnectMongoose } from "./util/connectMongoose.js";
import bookRouter from "./router/bookRoutes.js";
const PORT  = 4000;
const app = express();

// Der Server soll mit JSON arbeiten können
app.use(express.json());
app.use(bookRouter)
const mongooseConnected = await connnectMongoose()

if(mongooseConnected) {
    app.listen(PORT, () => {
        console.log("listening on port 3000");
    })
} else {
    console.error("Datenbankverbindung hat nicht geklappt.");
}
