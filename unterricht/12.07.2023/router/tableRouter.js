import { Router } from "express";
import { createTable, deleteTable, getTables, updateTable } from "../controller/tableController.js";

const tableRouter = new Router;

tableRouter
    .post("/tables", createTable)
    .get("/tables", getTables)
    .patch("/tables/:id", updateTable)
    .delete("/tables/:id", deleteTable)


export default tableRouter;