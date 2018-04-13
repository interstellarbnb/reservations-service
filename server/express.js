const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3004;


app.use(bodyParser.json());
app.use(express.static((path.join(__dirname, '../client/dist'))));
app.use((req, res) => {
  console.log(`Serving ${req.method} request to ${req.url}`);
});

app.get('/listing/:id', (req, res) => {
  console.log('GET Request in get handler!');
});

app.post('/listing/:id', (req, res) => {
  console.log('POST request in post handler!');
});

app.listen(PORT, () => console.log(`Reservations App listening at http://localhost:${PORT}`));
