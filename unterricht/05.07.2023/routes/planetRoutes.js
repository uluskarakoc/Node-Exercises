import { Router } from "express";
import {
  deletePlanet,
  getPlanet,
  getPlanets,
  patchPlanet,
  postPlanet,
} from "../controller/planetController.js";

const planetRouter = Router();

planetRouter
  .get("/planets", getPlanets)
  .get("/planets/:name", getPlanet)
  .delete("/planets/:id", deletePlanet)
  .patch("/planets/:id", patchPlanet)

  .post("/planets", postPlanet);

export default planetRouter;
