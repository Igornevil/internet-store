const express = require("express");
const Product = require("../models/Product");
const Category = require("../models/Category");
const router = express.Router({ mergeParams: true });
const { generateDefaultImg } = require("../utils/helpers");

router.get("/", async (req, res) => {
    const { cat } = req.query;

    try {
        if (cat) {
            const categoryId = await Category.findOne({ name: cat });
            const list = await Product.find({ category: categoryId._id });
            return res.status(200).send(list);
        }
        const list = await Product.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже 404"
        });
    }
});
router.post("/", async (req, res) => {
    const { name } = req.body;

    try {
        const isFound = await Product.findOne({ name });

        if (isFound) {
            return res.status(400).send({
                error: {
                    message: "PRODUCT_EXISTS",
                    code: 400
                }
            });
        }

        const content = await Product.create({
            ...generateDefaultImg(),
            ...req.body
        });

        return res.status(200).send(content);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});
router.get("/?query", async (req, res) => {
    try {
        const { query } = req.params;
        console.log(query);
        return res.status(200).send({
            message: query
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже1"
        });
    }
});
router.get("/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        const findProduct = await Product.findById(productId);

        if (!findProduct) {
            return res.status(400).json({ message: "Product not found" });
        }
        return res.status(200).send(findProduct);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже2"
        });
    }
});

module.exports = router;
