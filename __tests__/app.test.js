const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const { dogs } = require('../lib/dog-data');

describe('dog routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/dogs should return a list of dogs', async () => {
    const res = await request(app).get('/dogs');
    const expected = dogs.map((dog) => {
      return { id: dog.id, name: dog.name };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
