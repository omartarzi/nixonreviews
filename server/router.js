const router = require('express').Router();
import reviews from "./reviews/reviews.controller";
import reviews from "./products/products.controller";

router
  .route('/reviews/:productid')
  .get(reviews.getAll)
  .post(reviews.create)
  ;

router
  .route('/reviewlike/:id')
  .post(reviews.like)
  ;

router
  .route('/reviewdislike/:id')
  .post(reviews.dislike)
  ;

router
  .route('/rankings/:id')
  .get(reviews.getRankings)
  ;

router
  .route('/products/:id')
  .get(products.get)
  ;

module.exports = router;
