import { Router } from "express";
import {
  createOrders,
  deleteOrder,
  getOrders,
  updateOrders,
} from "../controller/orderController.js";

const orderRouter = Router();
orderRouter
  .post("/orders/:id", createOrders)
  .get("/orders", getOrders)
  .patch("/orders/:id", updateOrders)
  .delete("/orders/:id", deleteOrder);
export default orderRouter;
