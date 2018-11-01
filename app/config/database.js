require('dotenv').config('/');

module.exports = {
  environment: process.env.NODE_ENV,

  local: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
      min: 2,
      max: 10,
    },
    timezone: '+00:00',
  },

  develop: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
      min: 2,
      max: 10,
    },
    timezone: '+00:00',
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
      min: 2,
      max: 10,
    },
    timezone: '+00:00',
  },
};
