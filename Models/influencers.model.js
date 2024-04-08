const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const influencerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    avatar:{
        type: String, //This will be a url from cloudinary
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    youtubeLink:{
        type: String,
    },
    instagramLink:{
        type: String
    },
    instagramFollowers:{
        type: String
    },
    youtubeFollowers:{
        type: String
    },
    refreshToken:{
        type:String,
        select: false
    },
    password:{
        type: String, 
        required: true,
        select: false
    },
    coupons:[{
        type: mongoose.Types.ObjectId,
        ref: "Coupon"
    }]
}, {timestamps: true})




influencerSchema.methods.generateAccessToken = ()=>{
    return jwt.sign(
    {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}


influencerSchema.methods.generateRefreshToken = ()=>{
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const Influencers = mongoose.model("Influencer", influencerSchema)

module.exports ={Influencers}
