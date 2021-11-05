const express = require('express')
const router = express.Router()
require('./../models/experienceModels')
const mongoose = require('mongoose')
const experience = mongoose.model("Experience")
const morgan = require('morgan')
const experienceController = require("../controllers/experienceController");
const bodyParser = require('body-parser')


// Middleware
router.use(express.json())
router.use(morgan("dev"));

router.get('/experiences', experienceController.getexperience)
router.post('/experiences', experienceController.createexperience)
router.get('/experiences/:experienceId', experienceController.getidexperience)
router.put('/experiences/:experienceId', experienceController.updateexperience)
router.delete('/experiences/:experienceId', experienceController.deleteexperience)



router.get('/experience',(req,res)=>{
    res.render("experience")
})

module.exports = router