const express = require('express');
const routes = express.Router();
const welcomeController = require('../controllers/welcome');

routes.get('/hello', welcomeController.helloWorld);

module.exports = { routes };
