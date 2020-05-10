import reviews from "./reviews.controller";
import express from "express";
const router = express.Router();

router
  .route('/reviews')
  .get(reviews.get)
  .post(reviews.create)
  ;

router.post('/create', Reviews_controller.create);

module.exports = router;