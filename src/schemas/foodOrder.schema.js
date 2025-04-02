import mongoose, { mongo } from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: [
    {
      foodItems: { type: mongoose.Types.ObjectId, ref: "foods" },
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
});

export const FoodOrderModel = mongoose.model("foodOrder", foodOrderSchema);
