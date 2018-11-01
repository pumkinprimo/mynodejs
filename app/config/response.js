module.exports = {
  HTTP: {
    SUCCESS: {
      OK: {
        MESSAGE: 'ok',
        CODE: 200,
      },
    },
    CLIENT_ERROR: {
      NOT_FOUND: {
        MESSAGE: 'Not found',
        CODE: 404,
      },
      BAD_REQUEST: {
        MESSAGE: 'Bad request',
        CODE: 400,
      },
      UNAUTHORIZED: {
        MESSAGE: 'Unauthorized',
        CODE: 401,
      },
    },
  },
  API: {
    SUCCESS: {
      MESSAGE: 'success',
    },
    NOT_SUCCESS: {
      MESSAGE: 'error',
    },
  },
};
