const express = require('express');
const router  = express.Router();
const Product = require('../models/Product')

/* GET home page */
router.get('/', (req, res, next) => {
  Product.find()
    .then(items=>res.json(items))
    .catch(err=>console.log(err))
});

module.exports = router;
