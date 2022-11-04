const { Router } = require('express');
const Dogs = require('../models/Dogs');
// const { dogs } = require('../dog-data');

module.exports = Router()
  .get('/', async (req, res) => {
    const dogs = await Dogs.getAll();
    const filtered = dogs.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
