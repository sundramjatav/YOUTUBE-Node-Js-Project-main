const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
    title:{type:String},
    profile:{type:String},
    url:{type:String},
    poster:{type:String,default:""},
    description:{type:String},
    size:{type:String},
    key:{type:String,required:true},
    views:{type:Number},
    channel:{type:String},
    likes:{type:Number},
    date:{type:String},
    comments:{type:Array,default:[]}
    
},{timestamps:true})

const uploadModel = mongoose.model("upload",uploadSchema);

const shortSchema = new mongoose.Schema({
    title:{type:String},
    profile:{type:String},
    url:{type:String},
    poster:{type:String,default:""},
    description:{type:String},
    size:{type:String},
    key:{type:String,required:true},
    views:{type:Number},
    channel:{type:String},
    likes:{type:Number},
    date:{type:String},
    comments:{type:Array,default:[]}
    
},{timestamps:true})

const shortModel = mongoose.model("shorts",shortSchema);


module.exports = {uploadModel, shortModel}