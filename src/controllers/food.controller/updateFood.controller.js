import { FoodsModel } from "../../schemas/food.schema.js";
import mongoose from "mongoose";

const updateFoodById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid food ID format" });
    }
    const { foodName, price, ingredients, category, image } = req.body;

    const updatedFood = await FoodsModel.findByIdAndUpdate(req.params.id, {
      foodName,
      price,
      ingredients,
      category,
      image,
    });
    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(updatedFood);
  } catch (error) {
    console.log("Error updating food:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default updateFoodById;
