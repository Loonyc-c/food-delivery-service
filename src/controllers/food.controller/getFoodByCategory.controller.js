import { FoodsModel } from "../../schemas/food.schema.js";
import mongoose from "mongoose";

const getFoodbyCategory = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    const foodsByCategory = await FoodsModel.find({ category: id });

    res.status(200).json(foodsByCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
      message: "Error occurred while getting food by category",
    });
  }
};

export default getFoodbyCategory;
