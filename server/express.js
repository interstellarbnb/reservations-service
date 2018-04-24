const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { serveListing } = require('../database/database');

const app = express();
const PORT = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static((path.join(__dirname, '../client/dist'))));
app.use((req, res, next) => {
  console.log(`Serving ${req.method} request to ${req.url}`);
  next();
});

app.get('/listing/:listingId', async ({ params: { listingId } }, res) => {
  try {
    let listing = await serveListing(listingId);
    listing = JSON.stringify(listing);
    res.end(listing);
  } catch (error) {
    console.log(error);
  }
});

app.post('/listing/:id', (req, res) => {
  // TODO
  console.log('POST request in post handler!');
});

app.listen(PORT, () => console.log(`Reservations App listening at http://localhost:${PORT}`));
