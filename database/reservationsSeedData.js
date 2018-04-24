const mongoose = require('mongoose');

const { Listing } = require('./database.js');

mongoose.Promise = global.Promise;

// returns array of x entries
const createEntries = (x, startingId = 2) => {
  const entries = [];
  // for 2-100 generate fake object and write to
  for (let id = startingId; id <= x + startingId; id += 1) {
    const params = {
      id,
      reservations: [{
        id,
        start: new Date(2018, 3, 15),
        end: new Date(2018, 3, 20),
      }, {
        id: id + 1,
        start: new Date(2018, 3, 23),
        end: new Date(2018, 3, 28),
      }],
      reviewCount: Math.floor(Math.random() * 300),
      avgStars: Math.floor(Math.random() * 5),
      fee: Math.floor(Math.random() * 2400) + 600,
      maxGuests: Math.floor(Math.random() * 4) + 1,
      views: Math.floor(Math.random() * 1000),
    };
    entries.push(params);
  }
  return entries;
};
// saves an array of entries to the db
const saveEntries = async (entries) => {
  return Promise.all(entries.map((entry) => {
    const newEntry = new Listing(entry);
    return newEntry.save();
  }));
};
// Seeds the data into db
const seedReservations = async () => {
  let entries = [];

  // For Listing one
  const listingOneParams = {
    id: 1,
    reservations: [{
      id: 1,
      start: new Date(2018, 3, 15),
      end: new Date(2018, 3, 20),
    }, {
      id: 2,
      start: new Date(2018, 3, 23),
      end: new Date(2018, 3, 28),
    }],
    reviewCount: 275,
    avgStars: 4.5,
    fee: 148,
    maxGuests: 4,
  };
  const listingOne = new Listing(listingOneParams);
  entries.push(listingOne);
  entries = [...entries, ...createEntries(99)];
  try {
    console.log(entries);
    await saveEntries(entries);
    console.log('Seeding Done!');
  } catch (error) {
    console.log(error);
  }
};

seedReservations();
