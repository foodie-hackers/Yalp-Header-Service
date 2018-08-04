const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || '',
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
