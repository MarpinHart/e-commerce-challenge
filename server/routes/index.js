const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");
const Order = require("../models/Order");

/* GET home page */
router.get("/products", (req, res, next) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => console.log(err));
});

router.post("/user", (req, res, next) => {
  const { email } = req.body;
  User.create({ email })
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

router.post("/orders", (req, res, next) => {
  const { _user, _products } = req.body;
  Order.create({ _user, _products }).then(order => {
    console.log(order);
    return res.json(order);
  });
});

module.exports = router;
