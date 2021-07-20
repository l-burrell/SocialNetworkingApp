const express = require('express');
const route = express.Router();
const eventsController = require('../controllers/events');

route.get('/', eventsController.locateEvent);

route.post('/', eventsController.addEvent);

route.post('/test', eventsController.test);

route.put('/:id', eventsController.updateEvent);

route.delete('/:id', eventsController.deleteEvent);

module.exports = route;
