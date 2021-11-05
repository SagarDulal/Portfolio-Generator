require('./../database')
const { application } = require('express');
const Experience = require('../models/experienceModels');

const getexperience = async(req, res) => {
    try {
        const experience = await Experience.find({});
        // res.render('/port.ejs',{about: about})
        res.send(experience)
        // res.send("Data received :\n" JSON.stringify(req.body))
    } catch (error) {
        res.status(500);
    }
};

const createexperience = async(req,res)=>{
        const experience = new Experience();
        experience.work1 = req.body.work1,
        experience.work2 = req.body.work2,
        experience.work3= req.body.work3;
        try{
            await experience.save();
            console.log(req.body)
            res.redirect('/admin/project')
            // res.send('/port')
        }
        catch(error){console.log(error)}
        res.status(500)
     
}

const getidexperience = async (req,res)=>{
    try{
        const experience= await Experience.findOne({_id:req.params.experienceId})
        res.send(experience)
        }
    catch(err){
        console.log(err)
        res.status(500)
    }
}
const updateexperience = async (req,res)=>{
    try{
        const experience = await Experience.findByIdAndUpdate({
            _id: req.params.aboutId
        }, req.body,{
            new:true,
            
        });
        res.send(experience)
    }
    catch(err)
    {
        console.log(err)
        res.send(500)
    }
}

const deleteexperience = async (req,res)=>{
    try{
        const experience = await Experience.findByIdAndRemove({
            _id:req.params.experienceId
        })
        res.send(about)
    }catch(error){
        res.send(500)
    }
}
module.exports = {
    getexperience,
    createexperience,
    getidexperience,
    updateexperience,
    deleteexperience
}