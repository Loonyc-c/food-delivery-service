import mongoose, { mongo } from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: [{ type: mongoose.Types.ObjectId, ref: "foodOrderItem" }],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: { type: Date, default: Date.now },
});

export const FoodOrderModel = mongoose.model("foodOrder", foodOrderSchema);
