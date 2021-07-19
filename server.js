const express = require('express')
const app = express()
const dot = require('dotenv')

dot.config({path: 'config.env'})
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Launching server from localhost:${port}`));
