const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { serveListing, addReservation, addListing } = require('../database/database');
const { parseReservations } = require('./helpers.js');

const app = express();
const PORT = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.use('/dist', express.static(path.join(__dirname, '../client/dist')));
app.use((req, res, next) => {
  console.log(`Serving ${req.method} request to ${req.url}`);
  next();
});

app.get('/listing/:listingId', async ({ params: { listingId } }, res) => {
  try {
    console.log(listingId);
    let listing = await serveListing(listingId);
    listing = JSON.stringify(listing);
    res.end(listing);
  } catch (error) {
    console.log(error);
  }
});

app.post('/listing', async ({ body }, res) => {
  const newListing = parseReservations(body);
  try {
    await addListing(newListing);
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

app.post('/reservations/:listingId', async ({ params: { listingId }, body: { startDate, endDate } }, res) => {
  try {
    // await addReservation(listingId, startDate, endDate);
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Reservations App listening at http://container:${PORT}`));
