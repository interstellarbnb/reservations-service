const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Reservations');

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

const serveListing = id => Listing.findOne({ id });

const addReservation = (listingId, startDate, endDate) => {
  const newReservation = {
    start: startDate,
    end: endDate,
  };
  return new Promise((reject, resolve) => {
    Listing.findOneAndUpdate(
      { id: listingId },
      { $push: { reservations: newReservation } },
      { new: true },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  });
};

module.exports = {
  Listing,
  serveListing,
  addReservation,
};
