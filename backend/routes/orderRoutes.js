const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

//Place Order: information saved in Database
router.post('/order',async (req,res)=>{
    try{
       const newOrder = new Order(req.body)
       const saved = await newOrder.save()
       res.json(saved)
    }
    catch(err){
        res.status(500).json({error:'Order failed to place'})
    }
})

module.exports = router