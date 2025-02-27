import mongoose from "mongoose"


export const connectDb = async () => {
        const url = "mongodb+srv://battulgabathuyg54:SmPREHJXrZKELIDU@cluster0.zzz5q.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
        try{
            await mongoose.connect(url)
            console.log("connected")
    
        } catch (error) {
            console.log("error",error)
        }
}