const express = require('express');

const { apiController } = require('../../controllers/api');

const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

router.all('/', apiController.home);

// On préfixe les routers de l'API



router.use(() => {
    throw new ApiError('API Route not found', { statusCode: 404 });
});

module.exports = router;
