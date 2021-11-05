const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
    firstName:
    {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    birthday: {
        type: String,
        required: true
         },
    phone: {
        type: String
        },
    address: {
    type: String,
    required: true
 },
 bio: {
     type:String,
     required:true
 },
 profession:{
     type:String,
     required:true
 },
    image: {
         type:String,
         required: true
        },

});

module.exports = mongoose.model("About", aboutSchema);