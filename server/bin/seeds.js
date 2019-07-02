const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create the product list

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')
const Product = require('../models/Product')

require('../configs/database')

function createSeeds() {
  let temp = []
  for(i = 0; i < 100; i++){
    temp.push({
      price: `${Math.floor(Math.random() * (10.00 - 1.00 + 1.00)) + 1.00}€`,
      imageUrl: 'http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type.jpg',
      title: `Product ${i}`,
      description: 'What an amazing product',
    })
  }
  return temp
}

let products = createSeeds()

Product.deleteMany()
  .then(() => {
    return Product.create(products)
  })
  .then(productsCreated => {
    console.log(`${productsCreated.length} users created with the following id:`)
    console.log(productsCreated.map(u => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })