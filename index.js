const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose');

MONGODB_URL = 'mongodb+srv://nodejs:nodejsnodejsnodejs@cluster0.8zyok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(
  MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
      console.log('Connected to MongoDB');     
    }
)

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const locationRoute = require('./api/routes/location.route')

app.use("/v1/api/location", locationRoute)

app.listen(process.env.PORT)