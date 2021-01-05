/* eslint-disable no-undef */
const { Router } = require('express');
const User = require('./app/controllers/User.js');

const routes = Router();

routes.post('/login', User.signin);
routes.post('/register', User.storage);	

module.exports = routes;
