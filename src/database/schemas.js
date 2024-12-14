const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true}
    },
    {collection: "products"}
)

// model to work with database
const Product = mongoose.model('Product', productSchema)

module.exports = Product