const { Influencers } = require("../Models/influencers.model")
const jwt = require("jsonwebtoken")

const updateCoupons = async (req,res)=>{
    const token = req.cookies?.accessToken
    const coupon = req.coupon

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const influencer = await Influencers.findById(decodedToken._id)
    console.log(coupon);
    influencer.coupons.push(coupon)
    

    await influencer.save()
}

module.exports = {updateCoupons}