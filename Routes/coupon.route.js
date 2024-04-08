// import express from "express"
// import { addCoupon, getAllCoupons } from "../Controllers/coupon.controller.js";
const express = require("express")
const {addCoupon, getAllCoupons, deleteCoupon} = require("../Controllers/coupon.controller.js")


const router = express.Router();


router.route("/api/v1/addCoupon").post(addCoupon)
router.route("/api/v1/getCoupons").get(getAllCoupons)
router.route("/api/v1/deleteCoupon/:id").put(deleteCoupon)

module.exports = router