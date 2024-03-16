const express = require('express')
const router=express.Router();
const Order=require('../models/orders')
router.post('/GetOrders',async (req,res)=>{
    try{
        let userid=req.body.email;
        let eId=await  Order.findOne({'email':userid});
        res.json(eId.order_data) 
    }
    catch(error){
        console.log(error.message)
        res.send("Server Error");
    }
})
    
module.exports=router;
