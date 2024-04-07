import express from "express"
import influencerRouter from "./Routes/influencer.route.js"
import couponRouter from "./Routes/coupon.route.js"
export const app = express();

app.use(express.json())



app.use("/influencer", influencerRouter)
app.use("/coupons", couponRouter)

app.get("/", (req,res)=>{
    res.send("Server Working Properly")
})