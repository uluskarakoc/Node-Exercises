import { OrderModel } from "../models/order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.send(orders);
  } catch (error) {
    console.error(error);
  }
};

// export const createOrders = async (req, res) => {
//   const orderData = req.body;
//   const order = new OrderModel(orderData);
//   try {
//     await order.save();
//     res.send("Order gespeichert");
//   } catch (error) {
//     console.error(error.message);
//   }
// };

export const createOrders = async (req, res) => {
  const orderData = req.body;
  orderData.table = tableId;
  //  Burada anlasilamayan seyler var bunlari sormam lazim. genel amanda anlamak icin...
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
    const deleteOrder = await OrderModel.findByIdAndDelete(orderId);
    res.send("order deleted");
  } catch (error) {
    console.error(error);
  }
};
