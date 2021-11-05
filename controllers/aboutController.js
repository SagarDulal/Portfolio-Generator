require('./../database')
const { application } = require('express');
const About = require('../models/aboutModels');
const getabout = async(req, res) => {
    try {
        const about = await About.find({});
        // res.render('/port.ejs',{about: about})
        res.send(about)
        // res.send("Data received :\n" JSON.stringify(req.body))
    } catch (error) {
        res.status(500);
    }
};

const createabout = async(req,res)=>{
        const about = new About();
        about.firstName = req.body.firstName,
        about.lastName = req.body.lastName,
        about.email= req.body.email,
        about.birthday = req.body.birthday,
        about.phonenumber = req.body.phonenumber,
        about.address = req.body.address,
        about.profession = req.body.profession,
        about.bio = req.body.bio;
        about.image = req.file.filename;
        //  res.send("Data received: \n" + JSON.stringify(req.body))
        try{
            await about.save();
            console.log(req.file)
            res.redirect('/admin/background')
        }
        catch(error){console.log(error)}
        res.status(500)
}

const getidabout = async (req,res)=>{
    try{
        const about= await About.findOne({_id:req.params.aboutId})
        res.send(about)
        }
    catch(err){
        console.log(err)
        res.status(500)
    }
}
const updateabout = async (req,res)=>{
    try{
        const about = await About.findByIdAndUpdate({
            _id: req.params.aboutId
        }, req.body,{
            new:true,
            
        });
        res.send(about)
    }
    catch(err)
    {
        console.log(err)
        res.send(500)
    }
}

const deleteabout = async (req,res)=>{
    try{
        const about = await About.findByIdAndRemove({
            _id:req.params.aboutId
        })
        res.send(about)
    }catch(error){
        res.send(500)
    }
}
module.exports = {
    getabout,
    createabout,
    getidabout,
    updateabout,
    deleteabout
}