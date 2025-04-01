import { FoodOrderItemsModel } from "../../schemas/foodOrderItem.schema.js";
import { FoodOrderModel } from "../../schemas/foodOrder.schema.js";

export const createFoodOrder = async (req, res) => {
  try {
    const { user, totalPrice, foodOrderItems } = req.body;

    if (!user || !totalPrice || !foodOrderItems.length) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const createdItems = await FoodOrderItemsModel.insertMany(foodOrderItems);

    const foodOrder = await FoodOrderModel.create({
      user,
      totalPrice,
      foodOrderItems: createdItems.map((item) => item._id),
    });

    res.status(201).json(foodOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
