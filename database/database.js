const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/Reservations');

const ListingSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  reservations: Array,
  reviewCount: Number,
  avgStars: Number,
  fee: Number,
  maxGuests: Number,
  views: Number,
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = {
  Listing,
};