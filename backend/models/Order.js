const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user:{
        name:String,
        email:String
    },
    cartItems:[
        {
            name:String,
            price:Number,
            quanity:Number,
            image:String
        }
    ],

    total:Number,

    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Order',orderSchema)