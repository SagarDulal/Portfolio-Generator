const mongoose = require('mongoose');

const backgroundSchema = mongoose.Schema({
    faculty:{
        type: String,
        required:true
    },
    universityName: {
        type: String,
        required: true,
    },
    postgraduateEducation:{
        type: String,
    },
    collegeName:{
        type: String,
        required:true
    },
    schoolName:{
        type: String,
        required:true
    },
    other:{
        type:String
    }
    
})
module.exports = mongoose.model( "Background", backgroundSchema)