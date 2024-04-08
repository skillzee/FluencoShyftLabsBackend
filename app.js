import express from "express"
import influencerRouter from "./Routes/influencer.route.js"
import couponRouter from "./Routes/coupon.route.js"
import {config} from "dotenv"


export const app = express();


config({
    path: "Database/config.env"
})

app.use(express.json())



app.use("/influencer", influencerRouter)
app.use("/coupons", couponRouter)

app.get("/", (req,res)=>{
    res.send("Server Working Properly")
})