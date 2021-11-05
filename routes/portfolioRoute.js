const express = require('express')
const aboutModels = require('../models/aboutModels')
const router = express.Router();
const backgroundModels = require('./../models/backgroundModels')
const experienceModels= require('./../models/experienceModels')
const projectModels= require('./../models/projectModels')
const skillModels = require('./../models/skillModels')

router.get('/portfolio', async (req,res)=>{
    // await Form.findOne({}).sort({ _id: -1 })
    const aboutData = await aboutModels.findOne({}).sort({ _id :-1});
    const backgroundData =  await backgroundModels.findOne({}).sort({ _id :-1});
    const experienceData = await experienceModels.findOne({}).sort({ _id :-1});
    const projectData = await projectModels.findOne({}).sort({ _id :-1});
    const skillData = await skillModels.findOne({}).sort({ _id :-1});
    res.render('portfolio.ejs', {about: aboutData , background: backgroundData , experience:experienceData, project:projectData, skill:skillData})
})

module.exports = router
// , skills:skillData, background :backgroundData, experience: experienceData,project:projectData