import { FoodOrderItemsModel } from "../../schemas/foodOrderItem.schema.js";

export const createFoodOrderItem = async (req, res) => {
  try {
    const { food, quantity } = req.body;

    if (!food || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const foodOrderItem = await FoodOrderItemsModel.create({
      food,
      quantity,
    });

    res.status(201).json(foodOrderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
