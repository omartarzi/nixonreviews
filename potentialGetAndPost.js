//import database from dbhelpers file (currently non-existent)

//GET FUNCTION (controller)

getRatings: (req, res) => {
  let id = req.params.id;
  database //note this is from the dbhelpers
  .getRatings(id)
  .then((data) => {
    let reviewRating = data.map((review) => {
      return review.reviews
    })
    res.status(200).send(reviewRating)
  })
  .catch(err => res.status(404).send("Error getting review ratings))
}

//GET FUNCTION (dbhelper)
                                     
getRatings: (id) => database.find({ product_serial})

//POST FUNCTION (controller)

postReview: (req, res) => {
  let obj = {
    id: req.params.id,
    rating: req.body.rating,
    title: req.body.title,
    body: req.body.body,
    date: req.body.date
    name: req.body.name
    style: req.body.style
  }
  database
  .postReview(obj)
  .then(() => {
    res.status(200).send("Review posted")
  })
  .catch(err => res.status(404).send("Error posting review")
}

//POST FUNCTION (dbhelper)

postReview: (obj) => {
  database.findOneAndUpdate(
    { _id = obj.id },
    {
      $addToSet: {
        reviews: {
          rating: obj.rating,
          title: obj.title,
          body: obj.body,
          date: obj.date,
          name: obj.name,
          style: obj.style
        }
      }
    }
  )
}
