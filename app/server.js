require('dotenv').config('/');

const { port } = require('../app/config/app');

const ExpressApp = require('../infrastructure/express-app');
const ExpressServer = require('../infrastructure/express-server');

const expressServer = new ExpressServer(ExpressApp, { port });

expressServer.start();

module.exports = expressServer.server;
