const express = require('express')
const app = express()
const dot = require('dotenv')
const handleEvents = require('./routes/events');
const handleAccounts = require('./routes/accounts');
const handleServices = require('./routes/client')

dot.config({path: 'config.env'})
const port = process.env.PORT || 9000;

app.use('/', handleServices);
app.use('/events', handleEvents);
app.use('/users', handleAccounts);

app.listen(port, () => console.log(`Launching server from localhost:${port}`));
