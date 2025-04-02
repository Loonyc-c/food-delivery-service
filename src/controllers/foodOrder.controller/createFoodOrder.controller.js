import { FoodOrderItemsModel } from "../../schemas/foodOrderItem.schema.js";
import { FoodOrderModel } from "../../schemas/foodOrder.schema.js";

export const createFoodOrder = async (req, res) => {
  try {
    const { user, totalPrice, foodOrderItems } = req.body;

    console.log(req.body);

    if (!user || !totalPrice || !foodOrderItems.length) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const foodOrder = await FoodOrderModel.create({
      user,
      totalPrice,
      foodOrderItems, // This should already be an array of foodOrderItem IDs
    });

    // Populate the order to return complete data
    const populatedOrder = await FoodOrderModel.findById(foodOrder._id)
      .populate({
        path: "foodOrderItems",
        populate: {
          path: "food",
          model: "foods",
        },
      })
      .populate("user");

    res.status(201).json(populatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
