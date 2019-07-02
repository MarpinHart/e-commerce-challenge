const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema ({
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
    _product: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;