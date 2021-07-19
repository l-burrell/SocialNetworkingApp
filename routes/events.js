const express = require('express');
const route = express.Router();
const eventsController = require('../controllers/events.js');

route.get('/', eventsController.locateEvent);

module.exports = route;
