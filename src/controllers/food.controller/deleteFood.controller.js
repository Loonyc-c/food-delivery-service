import { FoodsModel } from "../../schemas/food.schema.js"
import mongoose from "mongoose";

const deleteFoodById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid food ID format" });
        }
        const deletedFood = await FoodsModel.findByIdAndDelete(req.params.id)

        if (!deletedFood) {
            return res.status(404).json({ message: "Food not found" });
          }

          res.status(200).json({ message: "Food deleted successfully" });
        } catch (error) {
        console.log("error", error);
        res.status(500).json({
            error: "Server error",
            message: "Error occurred while deleting food",
        });
    }
}

export default deleteFoodById

