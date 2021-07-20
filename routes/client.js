const express = require('express');
const route = express.Router();
const services = require('../services/client');

route.get('/', services.home);

route.get('/login', services.login);

route.get('/register', services.register);

route.get('/events', services.events);

module.exports = route;
