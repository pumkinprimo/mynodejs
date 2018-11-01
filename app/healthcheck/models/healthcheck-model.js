const { HEALTH_CHECK_MESSAGE } = require('../config/message');

class HealthcheckMessage {
  constructor({
    message = HEALTH_CHECK_MESSAGE,
  } = {}) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}

module.exports = HealthcheckMessage;
