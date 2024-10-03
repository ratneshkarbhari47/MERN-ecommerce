import Product from "../models/Product.model.js";

export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({
            "success" : true,
            "data" : products
        })
    } catch (error) {
        console.log("Error in fetching products : "+error)
        res.status(500).json({
            "success" : false,
            "message" : "No products found"
        })
    }
}

export const createProduct = async(req,res)=>{
    const product = req.body
    if(!product.name||!product.price||!product.image){
        return res.status(400).json({
            "success" : false,
            "message" : "Please send all required params"
        })
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save()
        res.status(201).json({
            "success" : true,
            "message" : "Product created successfuly"
        })
    } catch (error) {
        console.log("Error in create product "+error)
        res.status(500).json(
            {
                "success" : false,
                "message" : "Server error"+error
            }
        )
    }

}

export const updateProduct = async(req,res)=>{
    const {id} = req.params
    const product = req.body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({
            "success" : true,
            "data" : updatedProduct
        })
    } catch (error) {
        res.status(500).json({
            "success" : false,
            "message" : "Server error : "+error
        })
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} =  req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({
            "success": true,
            "message" : "Product deleted"
        })
    } catch (error) {
        res.status(404).json({
            "success": false,
            "message" : "Product not found"
        })
    }
}