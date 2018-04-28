const mongoose = require('mongoose');

const { Listing, closeConnection } = require('./database.js');

mongoose.Promise = global.Promise;

const addDays = (fromDate, days) => {
  const date = new Date(fromDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
// returns array of x entries
const createEntries = (x, startingId = 2) => {
  const entries = [];
  const now = new Date();
  // for 2-100 generate fake object and write to
  for (let id = startingId; id <= x + startingId; id += 1) {
    const params = {
      id,
      reservations: [{
        start: now,
        end: addDays(now, 4),
      }, {
        start: addDays(now, Math.floor(Math.random() * 6) + 10),
        end: addDays(now, Math.floor(Math.random() * 4) + 14),
      }],
      reviewCount: Math.floor(Math.random() * 300),
      avgStars: Math.floor(Math.random() * 5),
      fee: Math.floor(Math.random() * 2400) + 600,
      feeModifier: Math.floor(Math.random() * 400),
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
  const now = new Date();
  // For Listing one
  const listingOneParams = {
    id: 1,
    reservations: [{
      start: now,
      end: addDays(now, 4),
    }, {
      start: addDays(now, Math.floor(Math.random() * 2) + 10),
      end: addDays(now, Math.floor(Math.random() * 6) + 14),
    }],
    reviewCount: 275,
    avgStars: 4,
    fee: 1930,
    feeModifier: 200,
    maxGuests: 4,
  };
  const listingOne = new Listing(listingOneParams);
  entries.push(listingOne);
  entries = [...entries, ...createEntries(99)];
  try {
    await saveEntries(entries);
    closeConnection();
    console.log('Seeding Done!');
  } catch (error) {
    console.log(error);
  }
};

seedReservations();
