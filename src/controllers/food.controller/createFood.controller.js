import { FoodsModel } from "../../schemas/food.schema.js"

const createFoodController = async (req, res) => {
    const { foodName, price, image, ingredients, category } = req.body

    try {

        const createdFood =  await FoodsModel.create({
            foodName, price, image, ingredients, category
        })

        res.status(200).json({
            message: "Successfully created food",
            food: createdFood,
        })

    } catch (error) {
        console.log(`error occurs during creating food in cotroller ${error}`)
    }





}

export default createFoodController

