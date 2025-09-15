const express = require('express');

const router = express.Router();

router.get('/add',(req,res,next)=>{
    res.send('<h2>add product</h2><form action="/admin/product" method="POST"  > <input type="text" name="tiitle"> <input type="submit" value="send"></form>')
    
}) 

router.post('/product',(req,res,next)=>{
    
    console.log("formdata :",req.body);
    res.send("<b>product submited !</b>")
    
})

module.exports = router; 