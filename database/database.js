const mongoose = require('mongoose');

mongoose.connect('mongodb://database/Reservations');

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
      (err, result) => (err ? reject(err) : resolve(result)),
    );
  });
};

const addListing = (listing) => {
  const params = {
    reviewCount: listing.reviewCount,
    avgStars: listing.avgStars,
    fee: listing.fee,
    maxGuests: listing.maxGuests,
    views: listing.views,
  };
  const newListing = new Listing(params);
  return newListing.save();
};

const closeConnection = () => {
  mongoose.disconnect();
};

module.exports = {
  Listing,
  serveListing,
  addListing,
  addReservation,
  closeConnection,
};
