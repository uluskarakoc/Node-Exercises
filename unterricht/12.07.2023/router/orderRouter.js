import { Router } from "express";
import { createOrder, deleteOrder, getOrders, getOrdersPopulated, updateOrder } from "../controller/orderController.js";

const orderRouter = new Router;

orderRouter
    .post("/orders/:id", createOrder) // id ist die ID vom Tisch
    // .get("/orders", getOrders)
    .get("/orders", getOrders, getOrdersPopulated)
    .patch("/orders/:id", updateOrder)
    .delete("/orders/:id", deleteOrder)


export default orderRouter;