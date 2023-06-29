import express from "express";
import {
  getAlbums,
  postAlbums,
  findMusic,
  notFound,
  deleteAlbum,
} from "./controller/albumController.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// GET
app.get("/api/albums", getAlbums);

app.get("/api/albums/:year", findMusic);

// POST
app.post("/api/albums", postAlbums);
// DELETE
app.delete("api/albums/:title", deleteAlbum);
// NOT FOUND
app.use("*", notFound);

app.listen(PORT, () => {
  console.log(`Albums läuft ${PORT}`);
});
