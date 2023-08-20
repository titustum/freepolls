const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')


// set the view engine to ejs
app.use(expressLayouts)
app.set('view engine', 'ejs');

app.use("static/", express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// create poll page
app.get('/create', function(req, res) {
  res.render('pages/create_poll');
});

// create poll page
app.get('/create/options', function(req, res) {
  res.render('pages/create_options');
});

const choiceRoutes = require("./routes/choice")
const categoryRoutes = require("./routes/category")
const pollsterRoutes = require("./routes/pollster") 
const pollRoutes = require("./routes/poll") 

app.use('/api', categoryRoutes)
app.use('/api', choiceRoutes)
app.use('/api', pollsterRoutes)
app.use('/api', pollRoutes)

/*
let port = 3000
app.listen(port);
console.log(`Server is listening on port ${port}`);
*/

module.exports = app;