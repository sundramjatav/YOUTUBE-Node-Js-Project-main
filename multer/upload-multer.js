const multer = require("multer");
const path = require("path");

// profile img upload
const uploadProfile = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"public/profile-image")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+"-"+Math.floor(Math.random()*1E9)+path.extname(file.originalname))
        }
    })
}).single("profile")


// video upload
const uploadVideo = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"public/videos")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+"-"+Math.floor(Math.random()*1E9)+path.extname(file.originalname))
        }
    })
}).fields([{name:"upload_video"},{name:"poster"}])


// video upload
const shortVideo = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"public/short")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+"-"+Math.floor(Math.random()*1E9)+path.extname(file.originalname))
        }
    })
}).single("upload_video")




module.exports = {uploadProfile,uploadVideo,shortVideo}