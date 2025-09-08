const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

//Register:
router.post('/register', async(req,res)=>{

 try{

      const existing   =   await   User.findOne({email:req.body.email})
      if(existing) return res.status(400).json({error:'Email already exits'})

      const hashedPassword = await bcrypt.hash(req.body.password,10)
          
      //save the new user information

      const newUser = new User({...req.body, password:hashedPassword})
      const saved = await newUser.save()
      res.json(saved)

 }
 catch(err){
           res.status(500).json({error:'Failed to register'})
 }

})


//Login
router.post('/login',async(req,res)=>{

    try{
   
        const user = await User.findOne({email:req.body.email})
        if(!user) return res.status(400).json({error:'Invalid credentials'})

       const isMatch = await bcrypt.compare(req.body.password, user.password)     
       if(!isMatch) return res.status(400).json({error:'Invalid Password'})

       res.json({name:user.name,email:user.email})

    }catch(err){
        res.status(500).json({error:'Failed to login'})
    }
})

module.exports = router

