const path = require('path');

const { HTTP } = require('app/config/response');

module.exports.urlNotFound = (req, res) => {
  res.status(HTTP.CLIENT_ERROR.NOT_FOUND.CODE)
    .json({ message: HTTP.CLIENT_ERROR.NOT_FOUND.MESSAGE });
};

module.exports.handleError = (err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, '/views/error.html'));
};

