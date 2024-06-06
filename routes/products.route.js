const express = require("express")
const Product = require("../models/product.model.js")
const {getProducts, getSingleProduct, createProduct, updatedProduct, deleteProduct} = require("../controllers/product.controller.js")

const router = express.Router()

// getting all the products
router.get('/', getProducts)

// get single product using the product id
router.get('/:id', getSingleProduct)

// adding products 
router.post('/', createProduct)

// updating the product
router.put('/:id', updatedProduct)

// deleting the product
router.delete('/:id', deleteProduct)


module.exports = router
