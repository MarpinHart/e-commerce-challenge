const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
    price: {
        type: String, 
        required: true, 
    },
    imageUrl: {
        type: String, 
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;