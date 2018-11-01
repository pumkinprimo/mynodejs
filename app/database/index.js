const env = process.env.NODE_ENV || 'development';
const {
  host,
  port,
  database,
  username: user,
  password,
} = require('../config/database.js')[env];

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host,
    user,
    password,
    database,
    port,
  },
});

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
