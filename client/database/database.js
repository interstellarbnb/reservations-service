const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:3004/Reservations');

db.on('error', console.error.bind(console, error))
  .once('open', () => console.log('mongo connected'));

const ListingsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  reservations: Array,
  reviewCount: Number,
  avgStars: Number,
  fee: Number
});

const Listings = mongoose.model('Listings', ListingsSchema);

module.exports = {
  Listings,
}