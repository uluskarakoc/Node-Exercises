import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

export const TableModel = mongoose.model("Table", tableSchema);
