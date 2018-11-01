const request = require('supertest');

const server = require('app/server');

const { HTTP: HTTP_STATUS } = require('app/config/response');
const { HEALTH_CHECK_MESSAGE } = require('app/healthcheck/config/message');

describe('ExpressServer', () => {
  describe('GET /liveness', () => {
    it('should response with HTTP 200 OK', (done) => {
      request(server)
        .get('/liveness')
        .expect(HTTP_STATUS.SUCCESS.OK.CODE, done);
    });

    it('should response with content type of "text/plain"', (done) => {
      request(server)
        .get('/liveness')
        .expect('Content-Type', 'text/plain; charset=utf-8', done);
    });

    it('should response with content "OK"', (done) => {
      request(server)
        .get('/liveness')
        .expect(HEALTH_CHECK_MESSAGE, done);
    });
  });
});
