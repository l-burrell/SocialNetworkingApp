const express = require('express')
const app = express()
const dot = require('dotenv')
const handleEvents = require('./routes/events');
const handleAccounts = require('./routes/accounts');
const handleServices = require('./routes/client')

dot.config({path: 'config.env'})
const port = process.env.PORT || 9000;

// require the database we created
const connectDB = require('./database/database');

// mongodb connection
connectDB();

// register view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.use('/', handleServices);
app.use('/api/events', handleEvents);
app.use('/api/users', handleAccounts);

app.listen(port, () => console.log(`Launching server from localhost:${port}`));
