import express from "express";
import addAddress from "../controllers/user.controller/addAddress.controller.js";

export const userRouter = express.Router();

userRouter.put("/:id", addAddress);
