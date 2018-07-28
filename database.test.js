const db = require('./database-mysql/index.js');

afterAll(() => db.connection.end());

test('should have 100 restaurants in database', (done) => {
  function callback(error, data) {
    expect(data.length).toBe(100);
    done();
  }

  db.connection.query('SELECT * FROM restaurants', (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});

test('should return information about the first restaurant when given restaurant id 1', (done) => {
  function callback(error, data) {
    if (error) {
      throw error;
    } else {
      expect(data[0].name).toBe('Tacorea');
      expect(data[0].reviewCount).toBe(486);
      expect(data[0].averageRating).toBe(1.5);
      expect(data[0].priceRange).toBe(2);
      done();
    }
  }

  db.getRestaurantInfo(1, callback);
});

test('should return an empty array when given a restaurant id greater than 100', (done) => {
  function callback(error, data) {
    if (error) {
      throw error;
    } else {
      expect(data).toEqual([]);
      done();
    }
  }

  db.getRestaurantInfo(101, callback);
});
