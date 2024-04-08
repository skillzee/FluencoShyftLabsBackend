const mongoose = require("mongoose")


const couponSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    couponCode:{
        type: String,
        required: true
    },
    expiry:{
        type: String,
        required: true
    }
}, {timestamps: true})




const Coupons = mongoose.model("Coupon", couponSchema)

module.exports = {Coupons}