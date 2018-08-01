const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database-mysql/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/restaurants/:restaurantId', (req, res) => {
  db.getRestaurantInfo(req.params.restaurantId, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = {
  app,
};
