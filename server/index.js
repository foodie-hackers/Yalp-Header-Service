const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurants/:restaurantId', (req, res) => {
  db.getRestaurantInfo(req.body.id, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
