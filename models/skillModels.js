const mongoose = require('mongoose')

const skillSchema = mongoose.Schema({
    skills1:{
        type:String, 
        required: true,
    },
    skills2:{
        type:String,
        required:true
    },
    skills3:{
        type:String,
        required:true
    },
    skills4:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("Skill", skillSchema)