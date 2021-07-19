const express = require('express')
const app = express()
const dot = require('dotenv')
const handleEvents = require('./routes/events');

dot.config({path: 'config.env'})
const port = process.env.PORT || 9000;

app.use('/events', handleEvents);

app.listen(port, () => console.log(`Launching server from localhost:${port}`));
