const HealthCheckMessage = require('../models/healthcheck-model');

const { HTTP } = require('app/config/response');

exports.check = (req, res) => {
  const healthCheckMessage = new HealthCheckMessage();

  return res.type('text/plain').status(HTTP.SUCCESS.OK.CODE).send(healthCheckMessage.getMessage());
};
