import express from "express";
import cors from "cors";
import { connectDb } from "./src/mongo-connection.js";
import { authRouter } from "./src/routers/auth-router.js";
import { foodRouter } from "./src/routers/food.routes.js";
import { categoriesRouter } from "./src/routers/categories.routes.js";
import { userRouter } from "./src/routers/user.router.js";
import { orderRouter } from "./src/routers/foodOrder.routes.js";
import orderItemRouter from "./src/routers/foodOrderItem.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 9999;

connectDb();

app.use("/service", (req, res) => {
  res.send("hello world");
});

app.use("/auth", authRouter);
app.use("/food", foodRouter);
app.use("/categories", categoriesRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/orderItem", orderItemRouter);

app.listen(port, () => {
  console.log(`successfuly listenin port ${port}`);
});
