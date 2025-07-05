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
    Product.find({ _id: req.body.productId }, (err, docs) => {
        if (!err) {
            res.send(docs[0])
        }else {
            return res.status(400).json({ message: "something went wrong finding the product" });
        }
    });
});

export default router;