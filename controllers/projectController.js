require('./../database')
const { application } = require('express');
const Project = require('../models/projectModels');

const getproject = async(req, res) => {
    try {
        const project = await Project.find({});

    } catch (error) {
        res.status(500);
    }
};

const createproject = async(req,res)=>{
        const project = new Project();
        project.project1 = req.body.project1,
        project.project2 = req.body.project2,
        project.project3= req.body.project3;
        //  res.send("Data received: \n" + JSON.stringify(req.body))
        try{
            await project.save();
            console.log(req.body)
            res.redirect('/admin/skill')
        }
        catch(error){console.log(error)}
        res.status(500)
        
}

const getidproject = async (req,res)=>{
    try{
        const project= await Project.findOne({_id:req.params.projectId})
        res.send(project)
        }
    catch(err){
        console.log(err)
        res.status(500)
    }
}
const updateproject = async (req,res)=>{
    try{
        const project = await Project.findByIdAndUpdate({
            _id: req.params.projectId
        }, req.body,{
            new:true,
            
        });
        res.send(project)
    }
    catch(err)
    {
        console.log(err)
        res.send(500)
    }
}

const deleteproject = async (req,res)=>{
    try{
        const project = await Project.findByIdAndRemove({
            _id:req.params.projectId
        })
        res.send(project)
    }catch(error){
        res.send(500)
    }
}
module.exports = {
    getproject,
    createproject,
    getidproject,
    updateproject,
    deleteproject
}