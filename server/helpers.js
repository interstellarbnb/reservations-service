// Turns stringified dates in to javascript dates agian
const parseReservations = (listing) => {
  const newListing = Object.assign({}, listing);
  newListing.reservations = newListing.reservations.map(reservation => ({
    start: new Date(reservation.start),
    end: new Date(reservation.end),
  }));
  return newListing;
};

module.exports = {
  parseReservations,
};
