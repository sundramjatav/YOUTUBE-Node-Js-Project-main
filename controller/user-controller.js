const bcrypt = require('bcrypt')
const {v4:uuid} = require('uuid')
const nodemailer = require("nodemailer")
const fs = require('fs')
const jimp = require('jimp')
const {authModel} = require('../models/auth-model')
const {uploadModel,shortModel} = require('../models/upload-model')

// date format
const date = new Date().toLocaleDateString("de-DE")
console.log(date)


// get routes ----------------------------------------------------
// get login
const getLogin = async (req,res)=>{
    try {
        res.render("login")
    } catch (error) {
    }
}

// get register routes
const getRegister = async (req,res)=>{
    try {
        res.render("register")
    } catch (error) {
    }
}

// get logout routes
const getLogout = async (req,res)=>{
    try {
        req.session.destroy()
        res.redirect("/")
    } catch (error) {
        console.log(error)
        
    }
}

// get deshboard index
const getDeshboard = async (req,res)=>{
    try {
        if(req.session.user){
            const video = await uploadModel.find();
            // const userData = req.session.user
            const userData = await authModel.findOne({_id:req.session.user._id})
            res.render("index",{userData,video})
        }else{
            res.redirect("/error")
        }
    } catch (error) {
        console.log(error)
    }
}

// get profile information
const getProfile = async (req,res)=>{
    try {
        if(req.session.user){
            const userData = await authModel.findOne({key:req.query.id})
            const userVideo = await uploadModel.find({key:req.query.id})
            const shortVideo = await shortModel.find({key:req.query.id})
            const user = await authModel.findOne({_id:req.session.user._id})
            if(user.key === userData.key){
                res.render("user-channel",{userData, userVideo, user, shortVideo})
            }else{
                res.render("other-channel",{userData, userVideo, user, shortVideo})
            }
        }else{
            res.redirect("/error")
        }
    } catch (error) {
        console.log(error)
    }
}

// get studio
const getStudio = async (req,res)=>{
    try {
        if(req.session.user){
            const user = await authModel.findOne({_id:req.params.id})
            const fullVideo = await uploadModel.find({key:req.session.user.key})
            const shortVideo = await shortModel.find({key:req.session.user.key})
            res.render("studio",{user,fullVideo,shortVideo})
        }else{
            res.redirect("/error")
        }
    } catch (error) {
        console.log(error)
    }
}

// get player information
const getPlayer = async (req,res)=>{
    if(req.session.user){
        const user = await authModel.findOne({_id:req.session.user._id})
        const data = await uploadModel.findOne({_id:req.query.videos})
        const allData = await uploadModel.find();
        data.views++;
        await data.save();
        console.log(data);
        res.render("player",{data,allData,user})
    }
}

const getDeleteAccount = async (req,res)=>{
    if(req.session.user){
        await authModel.deleteOne({_id:req.session.user._id})
        await uploadModel.deleteMany({key:req.session.user.key})
        await shortModel.deleteMany({key:req.session.user.key})
        req.session.destroy()
        res.render("login",{account:"Deleted account"})
    }
}

// post routes ----------------------------------------------------
//post login from
const postLogin = async (req,res)=>{
    try {
        const {email,password} = req.body
        const userFind = await authModel.findOne({email});
        if(email && password){
            if(userFind){
                const passHash = await bcrypt.compare(password,userFind.password);
                if(userFind.email == email && passHash){
                    req.session.user = userFind
                    res.redirect("/deshboard")
                }else{
                    res.render("login",{message:"Email & Password not match"})
                }
            }else{
                res.render("login",{ message:"User not exist"})
            }
        }else{
            res.render("login",{message:"Allready field required"})
        }
    } catch (error) {
        console.log(error)
    }
}

// post registration form
const postRegistration = async (req,res)=>{
    try {
        // console.log(req.file.originalname)
        const {first,surname,username,email,mobile,password} = req.body;
        const userFind = await authModel.findOne({email});
        if(userFind){
            res.render("register",{message:`Allready registered Email : ${userFind.email}`})
        }else{
            if(first && surname && username && email && mobile && password){
                const passhash = await bcrypt.hash(password, 10);
                const data = await authModel.create({first, profile:req.file.filename, username, surname, email, join:date, mobile,videos:0,subscriber:0, password:passhash, key:uuid()});
                req.session.user = data
                if(data){
                    const transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true,
                        auth: {
                            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                            user: "abhaygautam626039@gmail.com",
                            pass: "jmsi fcjc wqtd ttld",
                        },
                    });
                    const info = await transporter.sendMail({
                        from: '" 👻 SR Youtube Support 👻" <abhaygautam626039@gmail.com>', // sender address
                        to: data.email, // list of receivers
                        subject: "Verification Your Account", // Subject line
                        html:`<p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" style="width: 100%;" alt=""></br> hii ${data.username},, Please verify your account <a href="http://localhost:3000/verify?id=${data._id}">verify account</a>,click here.</p>`                    // html body
                    });
                    console.log("Message sent: %s", info.response);
                    res.redirect("/deshboard")
                }else{
                    res.redirect("/error")
                }
            }else{
                res.render("register",{message:"Allready field required"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

// post upload request
const postUpload = async (req,res)=>{
    try {
        if(req.session.user){
            // console.log(req.files.upload_video[0])
            // var filesVideo = req.files.upload_video[0].filename
            // console.log(filesVideo)
            const {title,description} = req.body
            const user = req.session.user;
            const userFind = await authModel.findOne({key:user.key})
            const data = await uploadModel.create({title,description, date,poster:req.files.poster[0].filename, url:req.files.upload_video[0].filename, size:req.files.upload_video[0].size, views:0, channel:userFind.username, key:userFind.key,profile:userFind.profile, likes:0})
            res.redirect("/deshboard");
        }
    } catch (error) {
        console.log(error)
    }
}

// post upload request
const postShortUpload = async (req,res)=>{
    try {
        if(req.session.user){
            const {title,description} = req.body
            const user = req.session.user;
            const userFind = await authModel.findOne({key:user.key})
            const data = await shortModel.create({title,description, date, url:req.file.filename, size:req.file.size, views:0, channel:userFind.username, key:userFind.key,profile:userFind.profile, likes:0})
            res.redirect("/deshboard");
        }
    } catch (error) {
        console.log(error)
    }
}

// videos update
const postUpdate = async (req,res)=>{
    const {upload_id,title,description} = req.body
    const dataFind = await uploadModel.findOne({_id:upload_id})
    fs.unlink(`public/videos/${dataFind.poster}`,async (err)=>{
        if(err){
            await uploadModel.updateOne({_id:upload_id},{title,description,poster:req.files.poster[0].filename})
            res.redirect(`/${req.params.id}/studio`)
        }
        else{
            await uploadModel.updateOne({_id:upload_id},{title,description,poster:req.files.poster[0].filename})
            res.redirect(`/${req.params.id}/studio`)
        }
    })
    
}

// post change logo 
const postChangeLogo = async (req,res)=>{
    if(req.session.user){
        const userFind = await authModel.findOne({_id:req.session.user._id});
        fs.unlink(`public/profile-image/${userFind.profile}`,async (err)=>{
            if(!err){
                await authModel.updateOne({_id:userFind._id},{profile:req.file.filename});
                await uploadModel.updateMany({key:userFind.key},{profile:req.file.filename});
                res.redirect(`/${userFind._id}/studio`)
            }else{
                console.log("Profile picture not Upload")
                res.redirect(`/${userFind._id}/studio`)
            }
        })
    }
}

// post chng banner 
const postChangeBanner = async (req,res)=>{
    if(req.session.user){
        const userFind = await authModel.findOne({_id:req.session.user._id});
        fs.unlink(`public/profile-image/${userFind.banner}`,async (err)=>{
            if(!err){
                console.log(userFind)
                await authModel.updateOne({_id:userFind._id},{banner:req.file.filename});
                res.redirect(`/${userFind._id}/studio`)
            }else{
                await authModel.updateOne({_id:userFind._id},{banner:req.file.filename});
                console.log("Profile picture not Upload")
                res.redirect(`/${userFind._id}/studio`)
            }
        })
    }
}

// post user update 
const postUserUpdate = async (req,res)=>{
    if(req.session.user){
        const {username,handle,description,email} = req.body
        var userFind = await authModel.findOne({_id:req.session.user._id})
        await authModel.updateOne({key:userFind.key},{username,handle,description,email})
        await uploadModel.updateMany({key:userFind.key},{channel:username})
        res.redirect(`/${userFind._id}/studio`)
        
    }
}

// get api json data from server --- ------------------------------------------------------------------------------------------------
const getApiData = async(req,res)=>{
    const data = await uploadModel.find();
    res.send({success:true,data})
}

const getApiUsers = async(req,res)=>{
    const data = await authModel.find();
    res.send({success:true,data});
}

module.exports = {
    getLogin,
    getRegister,
    getLogout, 
    getDeshboard, 
    getProfile, 
    getStudio, 
    getPlayer, 
    postLogin, 
    postRegistration, 
    postUpload, 
    postShortUpload, 
    postUpdate,
    postChangeLogo,
    postChangeBanner, 
    getDeleteAccount,
    postUserUpdate,
    getApiData, 
    getApiUsers
}