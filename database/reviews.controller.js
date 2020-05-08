// const database = require('./index.js')
import Reviews_model from "./reviews.model.js"

// module.exports = {
//   getAll: () => database.find({})
// //   searchQuery: (obj) => database.aggregate([
// //     {"$unwind": $"reviews"}, {$match: {"reviews.review": {$regex: `${obj.queryStr}`, "options": "i" }}}
// //   ])
// }

exports.create_reviews = (req, res, next) =>{
  let reviews_body = req.body;
  const new_review = new Reviews_model(reviews_body);
  new_reviews.save()
    .then((saved) => {
      if(!saved){
        return res.status(400).send('unable to save reviews try again');
      } else if(saved){
        return res.status(201).send('reviews successfully saved');
      }
    })
    .catch((error) =>{
      return console.error(error);
    })
};