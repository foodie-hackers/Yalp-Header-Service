const express = require('express');
const db = require('../database-mysql/index.js');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});