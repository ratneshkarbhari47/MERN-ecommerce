import express from "express"
import Product from "../models/Product.model.js"
import { createProduct, deleteProduct, getProducts ,updateProduct } from "../controllers/Product.controller.js"

const router = express.Router()


// Product routes
router.get("/",getProducts)

router.post("/", createProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)





export default router