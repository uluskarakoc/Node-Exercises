import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  table: { type: mongoose.Schema.Types.ObjectId, ref: "Table" },
  foodItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  orderTime: { type: Date, default: () => Date.now() },
});

export const OrderModel = mongoose.model("Order", orderSchema);
