const express = require('express');

const healthCheck = require('../controllers/healthcheck-controller');

const router = express.Router();

router.get('/', healthCheck.check);

module.exports = router;
