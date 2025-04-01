import express from "express";
import { createFoodOrderItem } from "../controllers/foodOrderItem.controller/createFoodOrderItem.controller.js";
import { getFoodOrderItems } from "../controllers/foodOrderItem.controller/getFoodOrderItem.controller.js";

const orderItemRouter = express.Router();

orderItemRouter.post("/", createFoodOrderItem);
orderItemRouter.get("/", getFoodOrderItems);

export default orderItemRouter;
