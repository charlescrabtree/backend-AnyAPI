const express = require('express');
const path = require('path');

const app = express();

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/dogs', require('./controllers/dogs'));
app.use('/games', require('./controllers/games'));

app.use('./my-middleware', (req, res, next) => {

  // eslint-disable-next-line no-console
  console.log('middleware function');
  next({ message: 'this is an error' });
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
