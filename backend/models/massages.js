import mongoose from 'mongoose'


const massagesSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type: String,
        required:true 
    },
    pictures:{
        type: [String],
    },
    desc:{
        type: String,
        required:true
    },
})