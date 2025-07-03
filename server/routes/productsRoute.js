import express from "express";
import Product from "../models/productsModel.js";
const router = express.Router();

router.get("/getAllProducts", async (req, res) => {
    try {
        const docs = await Product.find({});
        return res.send({data: docs});
    } catch (err) {
        return res.status(500).json({ message: "Error fetching products", error: err });
    }
});

export default router;