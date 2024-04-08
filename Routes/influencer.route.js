// import express from "express"
// import { upload } from "../middleWare/multer.middleware.js"
// import { addInfluencer, getAllInfluencers, getInfluencer } from "../Controllers/influencer.controller.js";
const express = require("express")
const {upload} = require("../middleWare/multer.middleware.js")
const {addInfluencer, getAllInfluencers, getInfluencer} = require("../Controllers/influencer.controller.js")


const router = express.Router();


router.route("/api/v1/addInfluencer").post(
    upload.fields([
        {
        name: "avatar",
        maxCount:1
        }
    ]),
    addInfluencer
)

router.route("/api/v1/getAllInfluencers").get(getAllInfluencers)
router.route("/api/v1/getInfluencer/:id").get(getInfluencer)


module.exports = router