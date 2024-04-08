// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs"
const cloudinary = require("cloudinary").v2
const fs = require("fs")



cloudinary.config({ 
    cloud_name: 'di06mksou', 
    api_key: '313653534427913', 
    api_secret: '6vvaIYeUB9_qMHuWQ977XFG95ic' 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //File has been uploaded successfully
        // console.log("FIle Uploaded Successfully", response.url);
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) 
        return null;
    }
}

module.exports = {uploadOnCloudinary}