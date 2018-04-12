const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
const PORT = 3004;

app.use((req, res, next) => {
  console.log(`Serving ${req.method} request to ${req.url}`);
})
app.use(bodyParser.json());
app.use(express.static((path.join(__dirname, '../public'))));

app.get((req, res) => {
  console.log('GET Request in get handler!');
});

app.post((req, res) => {
  console.log('POST request in post handler!')
});

app.listen(PORT, () => console.log(`Reservations App listening on port ${PORT}`))
