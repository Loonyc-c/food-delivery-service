import { FoodOrderModel } from "../../schemas/foodOrder.schema.js";

const createFoodOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems } = req.body;

  try {
    const newOrder = await FoodOrderModel.create({
      user,
      totalPrice,
      foodOrderItems,
    });
    res.status(201).json({
      message: "Successfully ordered",
      order: newOrder,
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      message: "error occured at creating food order",
    });
  }
};

export default createFoodOrder;
