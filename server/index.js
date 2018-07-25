const express = require('express');
const path = require('path');
const db = require('../database-mysql/index.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});