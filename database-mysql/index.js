const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'yalpheadermysqldb.caq7k3imsgag.us-west-1.rds.amazonaws.com',
  user: 'allantzhao',
  password: 'Cosinc0226ely',
  database: 'yalp_header',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to database!');
});

const getRestaurantInfo = (id, callback) => {
  const query = `SELECT * FROM restaurants WHERE id = ${id};`;
  connection.query(query, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  getRestaurantInfo,
};
