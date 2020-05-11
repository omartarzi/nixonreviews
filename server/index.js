const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('router');
//const Reviews = require('../database/reviews.model.js');

const app = express();
const port = 1738;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

/*
app.get('/api/:product_serial', function(req,res){
  let serial = req.params.product_serial;
  //A1057-307-00
  let query = {product_serial : `${serial}`};
  Reviews.findOne(query, function(err, result){
    if(err){ console.error(err)};
    console.log(serial, "product", result, "result")
    res.status(200).send(result);
  });
});
*/

app.listen(port, () => console.log(`listening on port ${port}`))
