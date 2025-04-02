import mongoose from "mongoose";

const foodOrderItemSchema = new mongoose.Schema({
  food: { type: mongoose.Types.ObjectId, ref: "foods", required: true },
  quantity: { type: Number, required: true },
});

export const FoodOrderItemsModel = mongoose.model(
  "foodOrderItem",
  foodOrderItemSchema
);
