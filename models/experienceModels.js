const mongoose = require('mongoose')

const experienceSchema = mongoose.Schema ({
    work1: {
        type: String,
    },
    work2:{
        type:String
    },
    work3:{
        type:String
    }
})

module.exports = mongoose.model ("Experience", experienceSchema)