// const helper = require('../database/dbhelpers.js');

const controller = {
  getReviews: (req, res) => {
    // TODO
    helper.getAll((err, results) => {
     if (err) {
        res.status(400).send(err);
     } else {
        res.json(results);
     }
   });
}

module.exports = controller;
