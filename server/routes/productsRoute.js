import express from "express";
import Product from "../models/productsModel.js";
const router = express.Router();

router.get("/getAllProducts", async (req, res) => {
    try {
        const docs = await Product.find({});
        return res.send(docs);  
        // return res.status(200).json({ message: "All Products fetched successfully", data: docs });

    } catch (err) {
        return res.status(500).json({ message: "Error fetching products", error: err });
    }
});
router.post("/getProductById", async (req, res) => {
    const { productId } = req.body;
    if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
    }
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        // Just return the product as is, do not set default quantityOptions
        res.send(product);
    } catch (err) {
        return res.status(500).json({ message: "Error finding the product", error: err.message });
    }
});

export default router;