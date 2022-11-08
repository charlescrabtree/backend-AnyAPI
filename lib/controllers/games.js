const { Router } = require('express');
const Games = require('../models/Games');
const { games } = require('../games-data');

module.exports = Router()
  .get('/', async (req, res) => {
    const games = await Games.getAll();
    const filtered = games.map(({ id, title, studio, release_date }) => ({ id, title, studio, release_date }));
    res.json(filtered);
  })

  .get('/:id', (req, res) => {
    const game = games.find((game) => game.id === req.params.id);
    res.json(game);
  });
