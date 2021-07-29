const express = require('express');
const route = express.Router();
const services = require('../services/client');

route.get('/', services.home);

route.get('/login', services.login);

route.get('/logged', services.logged); 

route.get('/profile', services.profile); 

route.get('/register', services.register);

route.get('/events', services.events);

route.get('/eventsprofile', services.eventsprofile);

module.exports = route;
