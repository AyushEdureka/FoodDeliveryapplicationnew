const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const stripeRoutes = require('./routes/stripeRoutes')
const Stripe = require('stripe')


//Bridge between Frontend and Backend:
const app= express();
app.use(cors())  // Commuication Granted
app.use(express.json())  //Data Sharing through Json


//Backend and Database:
mongoose.connect(process.env.MONGO_URI)

.then(()=>console.log('MongoDB Connected'))
.catch(err=> console.error(err))


//Logic Part 

app.get('/',(req,res)=>{
    res.send('API Running')
});



//Routes:
const foodRoutes = require('./routes/foodRoutes')
app.use('/api/foods'  , foodRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/stripe',stripeRoutes)

const PORT =  process.env.PORT ||  5000; // Address of Backend
app.listen(PORT,()=>console.log('Server Ruuninng At 5000'))
