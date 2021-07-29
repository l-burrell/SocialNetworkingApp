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
app.use('', (req, res) => { 
    res.write("<h1>Kommunity</h1><br/>")
    res.write("<h2>Woah there! It appears you are lost in the void...</h2><br/>")
    res.write("<h3>You can return to Kommunity with the back button or <a href='/'>click here</a></h3>")
    res.end()
})

app.listen(port, () => console.log(`Launching server from localhost:${port}`));
