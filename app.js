// import express from "express"
// import influencerRouter from "./Routes/influencer.route.js"
// import couponRouter from "./Routes/coupon.route.js"
// import {config} from "dotenv"
const express = require("express")
const influencerRouter = require("./Routes/influencer.route.js")
const couponRouter = require("./Routes/coupon.route.js")
const config = require("dotenv").config

const app = express()

module.exports = { app };


config({
    path: "Database/config.env"
})

app.use(express.json())



app.use("/influencer", influencerRouter)
app.use("/coupons", couponRouter)

app.get("/", (req,res)=>{
    res.send("Server Working Properly")
})