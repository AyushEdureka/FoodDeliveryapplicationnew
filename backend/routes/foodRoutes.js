const express = require('express')
const router = express.Router();  //Connection between 2 Files
const Food = require('../models/Food')



//GET all Food
router.get('/',async (req,res)=>{
      
    try{
         const foods = await  Food.find()
         res.json(foods)

    }catch(error){
        res.status(500).json({error:'Server Error'})
    }

})



//Add Food Manually via POST (Optional)
router.post('/',async(req,res)=>{
    try{
    const newFood = new Food(req.body)
    const saved   = await  newFood.save()
    res.json(saved)

    }
    catch(err){
        res.status(400).json({error:'Error Adding Food'})
    }
})

module.exports = router