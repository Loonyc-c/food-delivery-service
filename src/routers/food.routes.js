import express from 'express'
import getFoodById from '../controllers/food.controller/getFoodById.controller.js'
import createFood from '../controllers/food.controller/createFood.controller.js'
import deleteFoodById from '../controllers/food.controller/deleteFood.controller.js'
import getAllFoods from '../controllers/food.controller/getAllFood.controller.js'
import updateFoodById from '../controllers/food.controller/updateFood.controller.js'

export const foodRouter = express.Router()

foodRouter.get("/:id",getFoodById)
foodRouter.post("/", createFood)
foodRouter.delete("/:id",deleteFoodById)
foodRouter.get("/",getAllFoods)
foodRouter.put("/:id",updateFoodById)


