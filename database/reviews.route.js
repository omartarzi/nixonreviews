import Reviews_controller from "./product.controller";
import express from "express";
const router = express.Router();

router.post('/create', Reviews_controller.create);

module.exports = router;