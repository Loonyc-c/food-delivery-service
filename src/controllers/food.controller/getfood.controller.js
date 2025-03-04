import { FoodsModel } from "../../schemas/food.schema.js";
import mongoose from "mongoose";


const getFoodById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid food ID format" });
        }
        const food = await FoodsModel.findById(req.params.id);

        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }

        res.status(200).json(food);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            error: "bad request",
            message: "Error occurred while getting food data",
        });
    }
}

export default getFoodById
