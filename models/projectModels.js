const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    project1:{
        type:String,
    },
    project2:{
        type:String,
    },
    project3:{
        type:String
    }
})

module.exports = mongoose.model("Project", projectSchema)