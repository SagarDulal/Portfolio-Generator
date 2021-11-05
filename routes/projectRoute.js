const express = require('express')
const router = express.Router()
require('./../models/projectModels')
const mongoose = require('mongoose')
const project = mongoose.model("Project")
const morgan = require('morgan')
const projectController = require("../controllers/projectController");
const bodyParser = require('body-parser')


// Middleware
router.use(express.json())
router.use(morgan("dev"));

router.get('/projects', projectController.getproject)
router.post('/projects', projectController.createproject)
router.get('/projects/:projectId', projectController.getidproject)
router.put('/projects/:projectId', projectController.updateproject)
router.delete('/projects/:projectId', projectController.deleteproject)


router.get('/project',(req,res)=>{
    res.render("project")
})

module.exports = router