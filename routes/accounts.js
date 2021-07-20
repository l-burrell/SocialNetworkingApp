const express = require('express')
const route = express.Router();
const accountController = require('../controllers/users');

route.get('/', accountController.locateAccount);

route.post('/', accountController.addAccount);

route.put('/:id', accountController.updateAccount);

route.delete('/:id', accountController.deleteAccount);

module.exports = route;
