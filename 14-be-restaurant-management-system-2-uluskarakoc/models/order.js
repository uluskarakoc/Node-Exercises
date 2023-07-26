import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  table: { type: mongoose.Schema.Types.ObjectId, ref: "Table" },
  foodItems: [
    {
      name: {
        type: String,
        required: true,
        validate: {
          validator: (userInput) => {
            if (userInput.includes(" ")) {
              return false;
            } else {
              return true;
            }
          },
          message: "Name darf nur aus einem Wort bestehen",
        },
      },
      price: {
        type: Number,
        required: true,
        validate: {
          validator: (userInput) => userInput % 2 <= 1,
          message: "Deine Zahl ist nich gültig",
        },
      },
    },
  ],
  orderTime: { type: Date, default: () => Date.now() },
});

export const OrderModel = mongoose.model("Order", orderSchema);
