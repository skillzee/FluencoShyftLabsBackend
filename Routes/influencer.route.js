// import express from "express"
// import { upload } from "../middleWare/multer.middleware.js"
// import { addInfluencer, getAllInfluencers, getInfluencer } from "../Controllers/influencer.controller.js";
const express = require("express")
const {upload} = require("../middleWare/multer.middleware.js")
const { getAllInfluencers, getInfluencer, registerInfluencer, deleteInfluencer, loginInfluencer, logOutInfluencer, updateInfluencer, updatePfp, updatePassword} = require("../Controllers/influencer.controller.js");
const { verifyJWT } = require("../middleWare/auth.middleware.js");


const router = express.Router();


router.route("/signup").post(
    upload.fields([
        {
        name: "avatar",
        maxCount:1
        }
    ]),
    registerInfluencer
)

router.route("/login").get(upload.none(),loginInfluencer)
router.route("/logout").get(verifyJWT, logOutInfluencer)
router.route("/getAllInfluencers").get(getAllInfluencers)
// Updation routes:-


// 1. Update User Basic InforMation
router.route("/update").post(verifyJWT, upload.none() ,updateInfluencer)
// 2. Update User Profile Picture
router.route("/updateProfilePicture").post(verifyJWT,
    upload.fields([
        {
        name: "avatar",
        maxCount:1
        }
    ]), updatePfp)
// 2. Update in password
router.route("/updatePassword").post(verifyJWT, updatePassword)


router.route("/getInfluencer/:id").get(getInfluencer)
router.route("/deleteInfluencer/:id").delete(deleteInfluencer)




module.exports = router