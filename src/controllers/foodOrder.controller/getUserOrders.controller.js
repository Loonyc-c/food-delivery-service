import { FoodOrderModel } from "../../schemas/foodOrder.schema.js";

export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const orders = await FoodOrderModel.find({ user: userId })
      .populate({
        path: "foodOrderItems",
        populate: {
          path: "food",
          model: "foods",
        },
      })
      .populate("user")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
