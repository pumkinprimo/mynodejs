const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const expressRoute = require('./express-route');

const { urlNotFound, handleError } = require('./express-error-handle');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, AccessToken, Cache-Control, X-CSRF-Token, Content-Length');
  next();
});


app.use('/', expressRoute);

app.use(urlNotFound);

app.use(handleError);

module.exports = app;

