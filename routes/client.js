const express = require('express');
const route = express.Router();
const services = require('../services/client');

route.get('/', services.home);

route.get('/login', services.login);

route.get('/logged', services.logged); 

route.get('/profile', services.profile); 

route.get('/signup', services.signup);

route.get('/search', services.search);

route.get('/events', services.events);

module.exports = route;
