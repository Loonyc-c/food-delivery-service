import { FoodsModel } from "../../schemas/food.schema";
import { CategoriesModel } from "../../schemas/categories.schema";
import mongoose from "mongoose";

const getFoodbyCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    const foodsByCategory = await FoodsModel.aggregate([
      {
        $match: { category: mongoose.Types.ObjectId(categoryId) },
      },
    ]);

    res.status(200).json(foodsByCategory);
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error occurred while getting food by category",
    });
  }
};

export default getFoodbyCategory;
