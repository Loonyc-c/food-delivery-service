import { FoodsModel } from "../../schemas/food.schema.js";


const updateFoodById = async (req, res) => {
    try {
        const food = await FoodsModel.findById(req.body)
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
              res.status(200).json(food);

    } catch (error) {
        console.log("error", error)
        res.status(400).json({
            error: "bad request",
            message: "error occurs at getting foods data"
        })
    }
}

export default updateFoodById