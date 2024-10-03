import express from "express"
import Product from "../models/Product.model.js"
import { createProduct, deleteProduct, getProducts ,updateProduct } from "../controllers/Product.controller.js"

const productRoutes = express.Router()


// Product routes
productRoutes.get("/",getProducts)

productRoutes.post("/", createProduct)

productRoutes.put("/:id", updateProduct)

productRoutes.delete("/:id", deleteProduct)





export default productRoutes