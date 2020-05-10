const router = require('express').Router();
import reviews from "./reviews/reviews.controller";
import reviews from "./products/products.controller";

router
  .route('/reviews/:productid')
  .get(reviews.getAll)
  .post(reviews.create)
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
