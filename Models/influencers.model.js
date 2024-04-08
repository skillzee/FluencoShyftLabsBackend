const mongoose = require("mongoose")


const influencerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    avatar:{
        type: String, //This will be a url from cloudinary
        required: true,
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
    }
}, {timestamps: true})

export const Influencers = mongoose.model("Influencer", influencerSchema)
