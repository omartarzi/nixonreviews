const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/reviews')
  .get(controller.getReviews)
  .post(controller.writeReview)
  ;

router
  .route('/products/:id')
  .get(controller.getProduct)
  ;

module.exports = router;
