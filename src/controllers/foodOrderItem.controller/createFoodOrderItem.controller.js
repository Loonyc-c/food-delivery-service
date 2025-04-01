import { FoodOrderItemsModel } from "../../schemas/foodOrderItem.schema.js";

export const createFoodOrderItem = async (req, res) => {
  try {
    const { foodName, quantity } = req.body;

    if (!foodName || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const foodOrderItem = await FoodOrderItemsModel.create({
      foodName,
      quantity,
    });

    res.status(201).json(foodOrderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
