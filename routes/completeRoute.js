const express = require('express')
const router = express.Router()


router.get('/formdata',(req,res)=>{
    res.render("formdata")
})

module.exports = router