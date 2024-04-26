// import express from "express"
// import influencerRouter from "./Routes/influencer.route.js"
// import couponRouter from "./Routes/coupon.route.js"
// import {config} from "dotenv"
const express = require("express")
const influencerRouter = require("./Routes/influencer.route.js")
const couponRouter = require("./Routes/coupon.route.js")
const cookieParser = require("cookie-parser")
const config = require("dotenv").config
const cors = require("cors")

const app = express()

module.exports = { app };



app.use(cors())
app.use(express.static("public"))

app.use(express.urlencoded({extended: true, limit: "16kb"}))


config({
    path: "Database/config.env"
})

app.use(express.json())
app.use(cookieParser())


app.use("/api/creator", influencerRouter)
app.use("/api/coupon", couponRouter)

app.get("/", (req,res)=>{
    res.send("Server Working Properly")
})