require("dotenv").config()
require('ejs');
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const app = express()

const Mongoose = require('./config/config')
const routers = require('./routes/user-router')

Mongoose(process.env.DATABASE_URL)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({secret:process.env.SESSION, resave:false, saveUninitialized:false}))
app.use(express.static(path.join(__dirname, 'public')))

// view engine set
app.set('view engine', 'ejs')

// route
app.use("",routers)

// error handler
app.use("",(req,res)=>{
    res.send("404, Page not found")
})

// port listening
app.listen(process.env.PORT,()=>{
    console.log("listening on port http://localhost:"+process.env.PORT)
})