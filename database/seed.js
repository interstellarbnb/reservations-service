const fs = require('fs');
const path = require('path');
const { Listing } = require('./database.js');

const readFile = async (filePath) => {
  let data = fs.readFileSync(path.join(__dirname, filePath));
  data = JSON.parse(data);
  
  try {
    await Promise.all(data.map(({
      id,
      reservations,
      reviewCount,
      avgStars,
      fee,
      maxGuests,
      views,
    }) => {
      let parsedEntry = {
        id,
        reservations,
        reviewCount,
        avgStars,
        fee,
        maxGuests,
        views,
      }
      let newListing = new Listing(parsedEntry);
      return newListing.save();
    }));
    console.log(`Seeded ${data.length} entries to the database!`)
  } catch(error) {
    console.log(error);
  }
}

readFile('./reservationsSampleData.json');