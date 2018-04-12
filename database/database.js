const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:3004/Reservations');

const ListingSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  reservations: Array,
  reviewCount: Number,
  avgStars: Number,
  fee: Number
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = {
  Listing,
}