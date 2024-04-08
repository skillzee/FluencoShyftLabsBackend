const { Coupons } = require("../Models/coupons.model")
const { ApiError } = require("../utils/apiError")
const { ApiResponse } = require("../utils/apiResponse")


const addCoupon  = async(req,res,next)=>{
    const {title, category, couponCode, expiry} = req.body
    const influencer = req.influencer
    const existingCoupon = await Coupons.findOne({couponCode})
    if(existingCoupon){
        throw new ApiError(400, "Coupon already exists")

    }
    
    if([title, category, couponCode,expiry].some((item)=>item?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }

    // const existedCoupon = await Coupons.findOne({couponCode})
    // if(existedCoupon){
    //     throw new ApiError(400, "Coupon already exist")
    // }

    const coupon = await Coupons.create({
        title,
        category,
        couponCode,
        expiry,
        influencer
    })

    
    req.coupon = coupon
    const createdCoupon = await Coupons.findById(coupon._id)
    
    if(!createdCoupon){
        throw new ApiError(500, "Something went wrong while creating")
    }
    
    res.status(201).json(
        new ApiResponse(200, createdCoupon, "User created Successfully")
    )
    next()
    
}
const getAllCoupons  = async(req,res)=>{
    try {
        const coupons = await Coupons.find({})
        res.status(201).json(
            new ApiResponse(200, coupons, "All coupons recieved")
        )
    } catch (error) {
        throw new ApiError(400, "Coupons not found")
    }

}


const deleteCoupon = async(req,res)=>{
    try {
        const {id} = req.params
        if(!id){
            throw new ApiError(400, "Coupon Code Not Found")
        }
        const coupon = await Coupons.findById(id);

        await coupon.deleteOne(coupon)

        res.status(200).json(
            new ApiResponse(200, "Coupon deleted Successfully")
        )


    } catch (error) {
        throw new ApiError(400, "Cannot delete the Coupon")
    }
}


module.exports = {getAllCoupons, addCoupon, deleteCoupon}