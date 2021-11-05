const express = require('express')
const router = express.Router()
require('./../models/backgroundModels')
const mongoose = require('mongoose')
const background = mongoose.model("Background")
const morgan = require('morgan')
const backgroundController = require("../controllers/backgroundController");
const bodyParser = require('body-parser')

// Middlewares
router.use(morgan("dev"));
router.use(express.json())
router.use(bodyParser.json()).use(morgan())
router.use(morgan('dev'))

router.get('/backgrounds', backgroundController.getbackground)
router.post('/backgrounds', backgroundController.createbackground)
router.get('/backgrounds/:backgroundId', backgroundController.getidbackground)
router.put('/backgrounds/:backgroundId', backgroundController.updatebackground)
router.delete('/backgrounds/:backgroundId', backgroundController.deletebackground)

router.get('/background',(req,res)=>{
    res.render('background')
})


module.exports = router
