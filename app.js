var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id });
});

app.post('/person', urlencodedParser, function(req, res) {
    res.send('Hello sir');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thanks for the json data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
    res.json({name: 'string', lastname: 'again'});
});

app.listen(port);