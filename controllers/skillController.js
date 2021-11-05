require('./../database')
const { application } = require('express');
const Skill = require('../models/skillModels');

const getskill = async(req, res) => {
    try {
        const skill = await Skill.find({});
        // res.render('/port.ejs',{about: about})
        res.send(skill)
        // res.send("Data received :\n" JSON.stringify(req.body))
    } catch (error) {
        res.status(500);
    }
};

const createskill = async(req,res)=>{
        const skill = new Skill();
        skill.skills1 = req.body.skills1,
        skill.skills2 = req.body.skills2,
        skill.skills3 = req.body.skills3,
        skill.skills4 = req.body.skills4;
        try{
            await skill.save();
            console.log(req.body)
            res.redirect('/admin/formdata')
            // res.send('/port')
        }
        catch(error){console.log(error)}
        res.status(500)
     
}

const getidskill = async (req,res)=>{
    try{
        const skill= await Skill.findOne({_id:req.params.skillId})
        res.send(skill)
        }
    catch(err){
        console.log(err)
        res.status(500)
    }
}
const updateskill = async (req,res)=>{
    try{
        const skill = await Skill.findByIdAndUpdate({
            _id: req.params.aboutId
        }, req.body,{
            new:true,
            
        });
        res.send(skill)
    }
    catch(err)
    {
        console.log(err)
        res.send(500)
    }
}

const deleteskill = async (req,res)=>{
    try{
        const skill = await Skill.findByIdAndRemove({
            _id:req.params.skillId
        })
        res.send(about)
    }catch(error){
        res.send(500)
    }
}
module.exports = {
    getskill,
    createskill,
    getidskill,
    updateskill,
    deleteskill
}