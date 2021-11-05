const express = require('express')
const router = express.Router()
require('./../models/aboutModels')
const mongoose = require('mongoose')
const about = mongoose.model("About")
const morgan = require('morgan')
const skillController = require("../controllers/skillController");
const bodyParser = require('body-parser')


// Middleware
router.use(express.json())
router.use(morgan("dev"));

router.get('/skills', skillController.getskill)
router.post('/skills', skillController.createskill)
router.get('/skills/:skillsId', skillController.getidskill)
router.put('/skills/:skillsId', skillController.updateskill)
router.delete('/skills/:skillsId', skillController.deleteskill)


router.get('/skill',(req,res)=>{
    res.render("skill")
})

module.exports = router