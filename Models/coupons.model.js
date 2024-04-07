import mongoose from "mongoose";


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
    validTill:{
        type: String,
        required: true
    }
}, {timestamps: true})




export const Coupons = mongoose.model("Coupon", couponSchema)