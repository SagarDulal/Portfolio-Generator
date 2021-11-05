require('./../database')
const { application } = require('express');
const Background = require('../models/backgroundModels');

const getbackground = async(req, res) => {
    try {
        const background = await Background.find({});
        // res.render('/port.ejs',{about: about})
        res.send(background)
        // res.send("Data received :\n" JSON.stringify(req.body))
    } catch (error) {
        res.status(500);
    }
};

const createbackground = async(req,res)=>{
        const background = new Background();
        background.faculty = req.body.faculty,
        background.universityName = req.body.universityName,
        background.postgraduateEducation= req.body.postgraduateEducation,
        background.collegeName = req.body.collegeName,
        background.schoolName = req.body.schoolName,
        background.other = req.body.other;
        try{
            await background.save();
            console.log(req.body)
            res.redirect('/admin/experience')
            // res.send('/port')
        }
        catch(error){console.log(error)}
        res.status(500)
     
}

const getidbackground = async (req,res)=>{
    try{
        const background= await Background.findOne({_id:req.params.backgroundId})
        res.send(background)
        }
    catch(err){
        console.log(err)
        res.status(500)
    }
}
const updatebackground = async (req,res)=>{
    try{
        const background = await Background.findByIdAndUpdate({
            _id: req.params.aboutId
        }, req.body,{
            new:true,
            
        });
        res.send(background)
    }
    catch(err)
    {
        console.log(err)
        res.send(500)
    }
}

const deletebackground = async (req,res)=>{
    try{
        const background = await Background.findByIdAndRemove({
            _id:req.params.backgroundId
        })
        res.send(about)
    }catch(error){
        res.send(500)
    }
}
module.exports = {
    getbackground,
    createbackground,
    getidbackground,
    updatebackground,
    deletebackground
}