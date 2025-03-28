import express from "express"
import cors from "cors"
import { connectDb } from "./mongo-connection.js"
import { authRouter } from "./routers/auth-router.js"
import { foodRouter } from "./routers/food.routes.js"
import { categoriesRouter } from "./routers/categories.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
const port = 9999

connectDb()


app.use("/service",(req,res)=>{
    res.send("hello world")
})

app.use("/auth",authRouter)
app.use("/food",foodRouter)
app.use("/categories",categoriesRouter)


app.listen(port,()=>{
    console.log(`successfuly listenin port ${port}`)
})