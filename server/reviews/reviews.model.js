const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  id: Number,
  rating: Number,
  title: String,
  body: String,
  date: Date,
  name: String,
  style: {
    classic: Boolean,
    funky: Boolean,
    daily_wear: Boolean,
    sporty: Boolean
  },
  verified_purchase: Boolean,
  product_serial: String,
  image: String
});

const model = mongoose.model("Reviews", reviewsSchema);

// Can add other helper functions here if desired
module.exports = {
    model: model
};
