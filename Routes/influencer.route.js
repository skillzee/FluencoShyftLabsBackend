// import express from "express"
// import { upload } from "../middleWare/multer.middleware.js"
// import { addInfluencer, getAllInfluencers, getInfluencer } from "../Controllers/influencer.controller.js";
const express = require("express")
const {upload} = require("../middleWare/multer.middleware.js")
const { getAllInfluencers, getInfluencer, registerInfluencer, deleteInfluencer, loginInfluencer, logOutInfluencer} = require("../Controllers/influencer.controller.js");
const { verifyJWT } = require("../middleWare/auth.middleware.js");


const router = express.Router();


router.route("/api/v1/registerInfluencer").post(
    upload.fields([
        {
        name: "avatar",
        maxCount:1
        }
    ]),
    registerInfluencer
)

router.route("/api/v1/loginInfluencer").get(loginInfluencer)
router.route("/api/v1/logoutInfluencer").get(verifyJWT, logOutInfluencer)
router.route("/api/v1/getAllInfluencers").get(getAllInfluencers)
router.route("/api/v1/getInfluencer/:id").get(getInfluencer)
router.route("/api/v1/deleteInfluencer/:id").delete(deleteInfluencer)



module.exports = router