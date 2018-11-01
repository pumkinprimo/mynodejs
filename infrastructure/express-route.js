const express = require('express');

const helmet = require('helmet');

const healthCheck = require('app/healthcheck/routes/healthcheck-route');

const authentication = require('app/domain/authentication/route');
const eventRegister = require('app/domain/event/route');
const youtube = require('app/domain/youtube/route');

const router = express.Router();

router.use(helmet());

router.use('/liveness', healthCheck);
router.use('/api/v1/users', authentication);
router.use('/api/v1/events/register/redeem', eventRegister);
router.use('/api/v1/youtube', youtube);

module.exports = router;
