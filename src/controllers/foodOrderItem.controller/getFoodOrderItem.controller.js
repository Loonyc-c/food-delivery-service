import { FoodOrderItemsModel } from "../../schemas/foodOrderItem.schema.js";

export const getFoodOrderItems = async (req, res) => {
  try {
    const foodOrderItems = await FoodOrderItemsModel.find().populate("foods");
    res.status(200).json(foodOrderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
