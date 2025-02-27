import express from 'express'
import getFoodController from '../controllers/food.controller/getfood.controller.js'
import createFoodController from '../controllers/food.controller/createFood.controller.js'

export const foodRouter = express.Router()

foodRouter.get("/",getFoodController)
foodRouter.post("/",createFoodController)


