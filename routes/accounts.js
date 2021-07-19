const express = require('express')
const route = express.Router();
const accountController = require('../controllers/users');

route.get('/', accountController.locateAccount);

module.exports = route;
