const faker = require('faker');
const mongoose = require('mongoose');
const seeder = require('mongoose-seed');
const Reviews = require('../server/reviews/reviews.model.js');
const Products = require('../server/products/products.model.js');

get_random = function (list) {
  return list[Math.floor((Math.random()*list.length))];
}


let createProductReviews = (index) => {
  let product = {};
  product.productId = index;
  product.reviews = [];
  for (let i = 0; i < 10; i++) {
    let rating = [1, 2, 3, 4, 5];
    let product_serial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 882, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    // let reviewStr = faker.commerce.productName + 'is ' + faker.commerce.productAdjective
    let adjective = [
      "Stylish",
      "Fashionable",
      "Big",
      "Small",
      "Loud",
      "Clean",
      "Boring",
      "Unique"
    ];

    let noun = [
      "Watch"
      // "Bag",
      // "Backpack",
      // "Hat",
      // "Beanie",
      // "T-shirt",
      // "Sweatshirt",
      // "Wallet",
      // "Belt",
      // "Keychain"
    ];
    let reviewTitle = [
      "Amazing Product",
      "Bad Product"
    ]
    let reviewBody = [
      "I love this",
      "I hate this"
     ]

    // let randAdj = get_random(adjective)
    // let randNoun = get_random(noun)
    let randTitle = get_random(reviewTitle)
    let randBody = get_random(reviewBody)
    let randRating = get_random(rating)
    let randProduct_Serial = get_random(product_serial)

   	//let reviewStr = randTitle + "\n randNoun + " is " + randAdj

    product.reviews.push(new Reviews.model({
      rating: randRating,
      name: faker.name.findName(),
      date: faker.date.past(),
      title: randTitle,
      body: faker.lorem.paragraph(),
      product_serial: randProduct_Serial,
      image: null,
      style: {
        classic: false,
        funky: false,
        daily_wear: false,
        sporty: false
      },
      verified_purchase: false,
      likes: 0,
      dislikes: 0
    }))
  }
  return product
}


let createProducts = () => {
  let productArr = [];
  for (let i = 1; i < 101; i++) {
    productArr.push(createProductReviews(i));
  }
  return productArr;
};

let seedData = (products) => {
  products.forEach((item) => {
    Products.model
      .create(item)
      .then((result) => {
        console.log('seeded', result);
      })
      .catch((err) => console.log(err));
  });
};

seedData(createProducts());




// const model = require('./index');
// const faker = require('faker');

// let createProductReviews = (index) => {
//   let product = {};
//   product.productId = index;
//   product.reviews = [];
//   for (let i = 0; i < 10; i++) {
//     let rating = [1, 2, 3, 4, 5];

//     let adjective = [
//       "Stylish",
//       "Fashionable",
//       "Big",
//       "Small",
//       "Loud",
//       "Clean",
//       "Boring",
//       "Unique"
//     ];

//     let noun = [
//       "Watch",
//       "Bag",
//       "Backpack",
//       "Hat",
//       "Beanie",
//       "T-shirt",
//       "Sweatshirt",
//       "Wallet",
//       "Belt",
//       "Keychain"
//     ];
//     let reviewTitle = [
//       ""
//     ]
//   }

// }
