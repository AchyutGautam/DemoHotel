const mongoose  = require("mongoose");
var mongoURI = 'mongodb://localhost:27017/hoteldemo.mydemo';




mongoose.connect(mongoURI, )

var connection = mongoose.connection

connection.on('error' ,()=> {
    console.log('Mongo DB Connection failed')
})

connection.on('connected' ,()=>{
    console.log('Mongo DB Connection Successful')

})

module.exports= mongoose;