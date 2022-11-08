const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { dogs } = require('../lib/dog-data');
const { games } = require('../lib/game-data');

describe('dog routes, and video game routes', () => {
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

  it('/dogs/:id should return dog details', async () => {
    const res = await request(app).get('/dogs/2');
    const lily = {
      id: '2',
      name: 'Lily',
      age: 1,
      breed: 'Pitbull/Shepherd',
      owner: 'Charles'
    };
    expect(res.body).toEqual(lily);
  });

  it('/games should return a list of video games', async () => {
    const res = await request(app).get('/games');
    const expected = games.map((game) => {
      return { id: game.id, title: game.title, studio: game.studio, release_date: game.release_date };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
