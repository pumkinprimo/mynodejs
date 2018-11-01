const { HTTP, API } = require('app/config/response');

module.exports.firebase = () => (req, res, next) => {
  const authorizationToken = this.extractAuthorizationHeader(req.headers.authorization);
  const { accesstoken } = req.headers;

  if (authorizationToken) {
    req.authorizationToken = authorizationToken;
    req.accesstoken = accesstoken;
    next();
  } else {
    res.status(HTTP.CLIENT_ERROR.UNAUTHORIZED.CODE).json({
      status: API.NOT_SUCCESS.MESSAGE,
      error_message: HTTP.CLIENT_ERROR.UNAUTHORIZED.MESSAGE,
    });
  }
};

module.exports.extractAuthorizationHeader = (header) => {
  if (!header) return false;

  const values = header.split(' ');

  if (values.length !== 2) return false;
  if (values[0] !== 'Bearer') return false;

  return values[1];
};
