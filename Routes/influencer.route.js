// import express from "express"
// import { upload } from "../middleWare/multer.middleware.js"
// import { addInfluencer, getAllInfluencers, getInfluencer } from "../Controllers/influencer.controller.js";
const express = require("express")
const {upload} = require("../middleWare/multer.middleware.js")
const { getAllInfluencers, getInfluencer, registerInfluencer, deleteInfluencer, loginInfluencer, logOutInfluencer} = require("../Controllers/influencer.controller.js");
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

router.route("/login").get(loginInfluencer)
router.route("/logout").get(verifyJWT, logOutInfluencer)
router.route("/getAllInfluencers").get(getAllInfluencers)
router.route("/getInfluencer/:id").get(getInfluencer)
router.route("/deleteInfluencer/:id").delete(deleteInfluencer)



module.exports = router