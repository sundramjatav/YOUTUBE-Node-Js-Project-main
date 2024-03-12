const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    profile:{type:String,required:true},
    banner:{type:String,default:""},
    handle:{type:String,default:""},
    description:{type:String,default:""},
    first:{type:String,required:true},
    surname:{type:String,required:true},
    username:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,required:true},
    subscriber:{type:Number,required:true},
    videos:{type:Number,required:true},
    join:{type:String,required:true},
    key:{type:String,required:true},
    password:{type:String,required:true},
},{ timestamps:true })

const authModel =mongoose.model("auth",authSchema);

module.exports = {authModel}