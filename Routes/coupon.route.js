import express from "express"
import { addCoupon, getAllCoupons } from "../Controllers/coupon.controller.js";


const router = express.Router();


router.route("/api/v1/addCoupon").post(addCoupon)
router.route("/api/v1/getCoupons").post(getAllCoupons)

export default router