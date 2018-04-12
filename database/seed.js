const mongoose = require('mongoose');
const { Listings } = require('./database.js');
const faker = require('faker');
// mongoose.Promise = Global.Promise

let entries = [];
// for 2-100 generate fake object and write to 
// for (let i = 2; i <= 100; i = i + 1) {
//   let params = {
//     id: i,
//     reservations: faker.,
//     reviewCount: Number,
//     avgStars: Number,
//     fee: Number
//   }
//   entries.push(params);
// }

console.log(faker.company.bs());

// Promise.all(entries.map(entry => {
//   let newEntry = new Listing(entry);
//   return newEntry.save();
// }))
//   .then(result => console.log('All Saved!', results))
//   .catch(err => console.log(err));