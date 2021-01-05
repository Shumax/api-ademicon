const { Router } = require('express');
const UserController = require('./app/controllers/UserController.js');

const routes = Router();

routes.post('/login', UserController.signin);

module.exports = routes;
