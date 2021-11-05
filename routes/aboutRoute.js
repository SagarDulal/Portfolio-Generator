// const { json } = require('express')
const express = require('express')
const router = express.Router()
require('./../models/aboutModels')
const multer = require('multer')
var upload = multer({ dest: 'uploads' })

const morgan = require('morgan')
const aboutController = require("../controllers/aboutController");



router.get('/abouts', aboutController.getabout)
router.post('/abouts',upload.single('myImage'), aboutController.createabout)
router.get('/abouts/:aboutId', aboutController.getidabout)
router.put('/abouts/:aboutId', aboutController.updateabout)
router.delete('/abouts/:aboutId', aboutController.deleteabout)
// router.put('/about/:aboutId', aboutController.putabout)

router.get('/about',(req,res)=>{
    res.render('about')
})

// router.post('/about',(req,res)=>{
//  res.send("SUccesful")
// })
module.exports = router