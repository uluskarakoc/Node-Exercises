import { Router } from "express";
import {
  createTable,
  deleteTable,
  getTables,
  updateTable,
} from "../controller/tableController.js";

const tableRouter = new Router();

tableRouter
  .get("/tables", getTables)
  .post("/tables", createTable)
  .patch("/tables/:id", updateTable)
  .delete("/tables/:id", deleteTable);
export default tableRouter;
