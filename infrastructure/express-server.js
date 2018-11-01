const http = require('http');

class ExpressServer {
  constructor(
    expressApp,
    {
      port = 3000,
    } = {},
  ) {
    this.defaultPort = 3000;
    this.app = expressApp;
    this.port = this.normalizePort(port);
  }

  normalizePort(port) {
    if (parseInt(port, 10) >= 0) {
      return port;
    }

    return this.defaultPort;
  }

  start() {
    this.app.set('port', this.port);
    this.server = http.createServer(this.app);
    this.server.listen(this.port);
    this.server.on('error', () => {});
    this.server.on('listening', () => {});
  }
}

module.exports = ExpressServer;
