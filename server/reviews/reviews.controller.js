const database = require('./index.js')
const ObjectID = require('mongodb').ObjectID;
import Reviews from "./reviews.model.js";

exports.getAll = async (req, res, next) => {
    const pageSize = 10;
    try {
        const total = await Reviews.model.count({id: req.params.productid});
        const reviews = await Reviews.model.find({}, {
            limit: pageSize,
            skip: parseInt(req.query.page || 0) * 10
        })
        .sort([['date', -1]])
        .exec();
        res.json({
            reviews: reviews,
            total: total
        });
    } catch (e) {
        console.log("Database error getting reviews", err);
        res.status(500).json({message: "Unable to get reviews!"});
    }
// //   searchQuery: (obj) => database.aggregate([
// //     {"$unwind": $"reviews"}, {$match: {"reviews.review": {$regex: `${obj.queryStr}`, "options": "i" }}}
// //   ])
}

exports.getRankings = async (req, res, next) => {
    try {
        let rankings = await Reviews.model.aggregate([
            {
                $match: {
                    // This is the product ID
                    id: ObjectID(req.params.productid)
                }
            },
            {
                $group: {
                    _id: 'rating',
                    count: { $sum: 1 }
                }
            }
        ]);
        let total = rankings.reduce((total, ranking) => {
            return total + ranking.count;
        }, 0);
        rankings.forEach(ranking => {
            ranking.level = parseInt(ranking._id);
            delete ranking._id;
            ranking.pct = (100 * ranking.count / total);
        });
        // Sort rankings in descending order
        rankings.sort((a, b) => {
            return b.level - a.level;
        });
        res.json({
            total: total,
            overallRating: (rankings.reduce((total, ranking) => {
                return total + (ranking.level * ranking.count);
            }, 0) / total),
            breakdown: rankings
        });
    } catch (e) {
        console.log("Database error getting rankings", e);
        res.status(500).json({message: "Unable to get rankings!"});
    }
};

exports.create = async (req, res, next) =>{
  let reviews_body = req.body;
  reviews_body.id = req.params.productid;
  try {
      let saved = await Reviews.model.create(reviews_body);
      if (!saved) {
        throw {
            message: "Unable to save"
        };
      }
      res.status(201).json({message: "Review successfully saved"});
  } catch (e) {
      console.log("Error saving review", e);
      return res.status(400).send('unable to save reviews try again');
  }
};
