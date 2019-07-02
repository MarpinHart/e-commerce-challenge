const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 5000

app.use(cors({
    origin: (origin, cb) => {
      cb(null, origin && origin.startsWith('http://localhost:'))
    },
    optionsSuccessStatus: 200,
    credentials: true
  }))
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI || "mongodb://localhost/e-commerce-challenge"
mongoose.connect(uri, {useNewUrlParser:true})
const connection = mongoose.connection

connection.once('open', function(){
    console.log("MongoDB Database connection enstablished")
})

app.listen(PORT, function(){
    console.log("server running succesfully")
})

const index = require('./routes/index');
app.use('/', index);