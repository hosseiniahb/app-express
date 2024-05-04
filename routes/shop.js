const path = require("path");
const express = require("express");

const productController = require("../controllers/products");

const router = express.Router();

router.get("/", productController.getProducts);

router.post("/", productController.deleteProduct);

module.exports = router; 