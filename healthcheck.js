const http = require('http');

const { HTTP: HTTP_STATUS } = require('app/config/response');

const { port } = require('app/config/app');

const options = {
  timeout: 2000,
  host: 'localhost',
  port,
  path: '/liveness',
};

const request = http.request(options, (res) => {
  console.info(`STATUS: ${res.statusCode}`);
  process.exitCode = (res.statusCode === HTTP_STATUS.SUCCESS.OK.CODE) ? 0 : 1;
  process.exit();
});

request.on('error', (err) => {
  console.error('ERROR', err);
  process.exit(1);
});

request.end();
