const express = require('express')
const router = express.Router();
const {uploadProfile,uploadVideo,shortVideo} = require("../multer/upload-multer")
const {authLogin,authLogout} = require('../middleware/auth')
const {authModel} = require("../models/auth-model")
const {uploadModel,shortModel} = require("../models/upload-model")
const fs = require('fs')

// user cnotroller
const {
    getLogin, getRegister, getLogout,
    getDeshboard, getProfile ,getStudio,
    getPlayer, postLogin, postRegistration,
    postUpload, postShortUpload, postUpdate,
    postChangeLogo, postChangeBanner, getApiData,
    getDeleteAccount,postUserUpdate,
    getApiUsers} = require("../controller/user-controller")

// routes----------------------------------------------------------------

// login user
router.get("/",authLogout, getLogin)
// register user
router.get("/registration",authLogout, getRegister)
// home page index
router.get("/deshboard",authLogin, getDeshboard)
// profile route page 
router.get("/deshboard/profile",authLogin, getProfile)
// studio page
router.get("/:id/studio",authLogin,getStudio)
// video player
router.get("/deshboard/player",authLogin, getPlayer)
// logout page 
router.get("/logout",authLogin,getLogout)
// login page 
router.post("/",authLogout, postLogin)
// register page 
router.post("/registration", uploadProfile, authLogout, postRegistration)
// upload video 
router.post("/upload", uploadVideo, authLogout, postUpload)
// short video upload
router.post("/short-upload", shortVideo, authLogout, postShortUpload)
// videos update
router.post("/:id/video-update",uploadVideo,authLogin, postUpdate)
// change logo 
router.post("/change-logo", uploadProfile, authLogin, postChangeLogo)
// change logo 
router.post("/change-banner", uploadProfile, authLogin, postChangeBanner)

router.post("/user-update",authLogin,postUserUpdate)

// acount delete 
router.get("/delete-account", authLogin, getDeleteAccount)

// all video json formats routes
router.get("/api/data",getApiData)
// all user data json formats routes
router.get("/api/users",getApiUsers)


module.exports = router;
