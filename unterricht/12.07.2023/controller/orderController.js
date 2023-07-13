import { OrderModel } from "../models/Order.js";
import { TableModel } from "../models/Table.js";

export const getOrders = async (req, res, next) => {
  console.log("req.query", req.query);

  if (req.query.populate === "true") {
    return next();
  }

  try {
    const orders = await OrderModel.find().select("orderTime foodItems");

    res.send(orders);
  } catch (error) {
    console.error(error);
  }
};

export const getOrdersPopulated = async (req, res) => {
  try {
    const orders = await OrderModel.find().populate("table", "tableNumber");

    res.send(orders);
  } catch (error) {
    console.error(error);
    // hier fehlt eigentlich ein res.send oder next(error)
  }
};

export const createOrder = async (req, res) => {
  const orderData = req.body; // { foodItems: [{name: "banana", "price": 10}]}
  const tableId = req.params.id;
  orderData.table = tableId; // { foodItems: [{name: "banana", "price": 10}], table: "64ad1a4bc730d0bbd635ec35"}
  const order = new OrderModel(orderData);
  try {
    const table = await TableModel.findById(tableId);
    await order.save();

    table.orders.push(order._id);
    await table.save();
    res.send("order gespeichert");
  } catch (error) {
    console.error(error);
  }
};

export const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    const updateOrder = await OrderModel.findByIdAndUpdate(orderId, req.body, {
      new: true,
    });
    res.json(updateOrder);
  } catch (error) {
    console.error(error);
  }
};

export const deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    const deleteOrder = await OrderModel.findByIdAndDelete(orderId, req.body);
    res.send("order deleted");
  } catch (error) {
    console.error(error);
  }
};
