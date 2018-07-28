const request = require('supertest');
const app = require('./server/app.js');
const db = require('./database-mysql/index.js');

const isCorrectRestaurant = (res) => {
  expect(res.body[0].name).toBe('Tacorea');
  expect(res.body[0].reviewCount).toBe(486);
  expect(res.body[0].averageRating).toBe(1.5);
  expect(res.body[0].priceRange).toBe(2);
};

afterAll(() => db.connection.end());

test('should have status code 200 when a GET request is received with a valid restaurant id', () => (
  request(app.app)
    .get('/restaurants/1')
    .expect(200)
));

test('should return information about the first restaurant when given restaurant id 1', () => (
  request(app.app)
    .get('/restaurants/1')
    .expect(isCorrectRestaurant)
));
