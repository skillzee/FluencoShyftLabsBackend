const { Influencers } = require("../Models/influencers.model.js")
const { ApiError } = require("../utils/apiError")
const { ApiResponse } = require("../utils/apiResponse.js")
const { uploadOnCloudinary } = require("../utils/cloudinary.js")
const bcrypt = require("bcrypt")


const registerInfluencer = async(req,res)=>{
    const {name, username, category, password, email, youtubeLink,instagramLink,instagramFollowers,youtubeFollowers} = req.body
    if(
        [name, username, category, password].some((field)=> field?.trim() === "")    
    ){
        throw new ApiError(400, "Name, username, category, password are required fields")
    }

    const existedUser = await Influencers.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(409, "User already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }
    // console.log(avatarLocalPath);
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    // console.log(avatar);
    console.log(process.env.CLOUDINARY_CLOUD_NAME);
    console.log(process.env.CLOUDINARY_API_KEY);
    console.log(process.env.CLOUDINARY_API_SECRET);
    if(!avatar){
        throw new ApiError(400, "Avatar file is required")
    }
    const hashedPassword = await bcrypt.hash(password, 10)


    const influencer = await Influencers.create({
        name,
        username: username.toLowerCase(),
        email,
        category,
        youtubeLink,
        instagramLink,
        instagramFollowers,
        youtubeFollowers,
        password: hashedPassword,
        avatar: avatar?.url || ""
    })
    
    const craetedInfluencer = await Influencers.findById(influencer._id)

    if(!craetedInfluencer){
        throw new ApiError(500, "Something went wrong while registering the Influencer")

    }

    return res.status(201).json(
        new ApiResponse(200, craetedInfluencer, "User registered successfully")
    )
   
}

const getAllInfluencers = async(req,res)=>{
    try {
        const influencers = await Influencers.find({})
    
        return res.status(201).json(
            new ApiResponse(200, influencers, "All Influencers achieved successfully")
        )
    } catch (error) {
        throw new ApiError(400, "Not able to get the users")
    }
}


const getInfluencer = async(req,res)=>{

}


module.exports = {getInfluencer, getAllInfluencers, registerInfluencer}