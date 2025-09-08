const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    image:String,
    desc:String,
    category: String


});


module.exports = mongoose.model('Food',foodSchema)