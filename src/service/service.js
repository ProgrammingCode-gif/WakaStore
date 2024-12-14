// Functions to get data from the database
const Product = require("../database/schemas");

async function getAllProducts() {
    try {
        const products = await Product.find()
        return products
    } catch (error) {
        console.log("Failed to load products", error);
    }
}

async function getProduct(title) {
    try {
        const product = await Product.findOne({title})
    
        return product
    } catch (error) {
        console.log("Failed to load product", error);
    }  
}

async function getProductsByCategory(category) {
    try {
        const products = await Product.find({category})
        return products
    } catch (error) {
        console.log("Failed to load products", error);
    }
}

module.exports.getAllProducts = getAllProducts
module.exports.getProduct = getProduct
module.exports.getProductsByCategory = getProductsByCategory
