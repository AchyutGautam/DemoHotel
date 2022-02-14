const express= require("express");
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGOURI,{useUnifiedTopology : true, useNewUrlParser:true})
        .then(
            console.log('db connected')
        )

const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')
app.use(express.json())

app.use('/api/rooms' , roomsRoute)
app.use('/api/users' , usersRoute)
app.use('/api/bookings' , bookingsRoute)

app.use(bodyParser.json())
app.use(morgan('combined'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));
// app.listen(port, () => console.log(`server is running on port ${port}`));