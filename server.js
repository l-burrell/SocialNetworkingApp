const express = require('express')
const app = express()
const dot = require('dotenv')
const handleEvents = require('./routes/events');
const handleAccounts = require('./routes/accounts');

dot.config({path: 'config.env'})
const port = process.env.PORT || 9000;

app.use('/events', handleEvents);
app.use('/accounts', handleAccounts);

app.listen(port, () => console.log(`Launching server from localhost:${port}`));
