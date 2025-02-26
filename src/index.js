import express from "express"
import cors from "cors"
import { connectDb } from "./mongo-connection.js"
import { authRouter } from "./routers/auth-router.js"

const app = express()
app.use(cors())
app.use(express.json())
const port = 9999

connectDb()


app.use("/service",(req,res)=>{
    res.send("hello world")
})

app.use("/auth",authRouter)
// app.post("/auth/sign-up",authRouter
// )


app.listen(port,()=>{
    console.log(`successfuly listenin port ${port}`)
})