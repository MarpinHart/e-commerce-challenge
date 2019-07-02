const express = require('express');
const router  = express.Router();
const Product = require('../models/Product')
const User = require('../models/User')

/* GET home page */
router.get('/products', (req, res, next) => {
  Product.find()
    .then(products=>res.json(products))
    .catch(err=>console.log(err))
});

router.post('/user', (req, res, next) => {
   const { email } = req.body
   User.create({ email })
    .then(user => res.json(user))
    .catch(err => console.log(err))
});



module.exports = router;
