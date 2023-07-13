import { OrderModel } from "../models/order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.send(orders);
  } catch (error) {
    console.error(error);
  }
};

export const createOrders = async (req, res) => {
  const orderData = req.body;
  const order = new OrderModel(orderData);
  try {
    await order.save();
    res.send("Order gespeichert");
  } catch (error) {
    console.error(error.message);
  }
};

export const updateOrders = async (req, res) => {
  const orderId = req.params.id;
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, req.body, {
      new: true,
    });
    res.json(updatedOrder);
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const deleteOrder = await OrderModel.findByIdAndDelete(orderId, req.body);
    res.send("deleted");
    console.log(2);
  } catch (error) {
    console.error(error.message);
  }
};
