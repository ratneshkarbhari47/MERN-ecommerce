import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"
import productRoutes from "./routes/product.route.js"

const app = express()
dotenv.config()

app.use(express.json())

// Routes
app.use("/api/products",productRoutes)







app.listen(5000,()=>{
    connectDb()
    console.log("Server listening at port 5000x sa")
});