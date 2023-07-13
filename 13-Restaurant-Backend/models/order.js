import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true },
  foodItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  orderTime: { type: Date, default: () => Date.now() },
});

export const OrderModel = mongoose.model("Order", orderSchema);
