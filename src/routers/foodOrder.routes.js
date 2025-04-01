import express from "express";
import { createFoodOrder } from "../controllers/foodOrder.controller/createFoodOrder.controller.js";
import { getUserOrders } from "../controllers/foodOrder.controller/getUserOrders.controller.js";
export const orderRouter = express.Router();

orderRouter.post("/", createFoodOrder);
orderRouter.get("/:userId", getUserOrders);
