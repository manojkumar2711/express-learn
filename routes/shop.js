const express = require('express');

const router = express.Router();


router.get('/',(req,res,next)=>{
    res.send("<h1>welcome home pages</h1>")
});

module.exports = router;