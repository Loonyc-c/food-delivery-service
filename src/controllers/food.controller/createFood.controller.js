import { FoodsModel } from "../../schemas/food.schema.js"
import mongoose from "mongoose";

const createFood = async (req, res) => {
    const { foodName, price, ingredients, category,image } = req.body

    try {
        if (!mongoose.Types.ObjectId.isValid(category)) {
            return res.status(400).json({ message: "Invalid category ID" });
        }

        const existingFood = await FoodsModel.findOne({ foodName });
        if (existingFood) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Food already exists",
            });
        }

        const createdFood = await FoodsModel.create({
            foodName,
            price,
            ingredients,
            category,
            image
        });

        res.status(201).json({
            message: "Successfully created food",
            food: createdFood,
        });


    } catch (error) {
        console.log(`error occurs during creating food in cotroller ${error}`)
    }
}

export default createFood

