import { Router } from "express";
import {createOrders, deleteOrder, getOrders, updateOrders} from "../controller/orderController.js"

const orderRouter = Router();
orderRouter

.get("/orders", getOrders)
.post("/orders",createOrders)
.patch("/orders/:id",updateOrders)
.delete("orders/:id",deleteOrder)
export default orderRouter;


