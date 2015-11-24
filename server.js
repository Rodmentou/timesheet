var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


app.DB_URL = process.env.DB_URL || 'mongodb://localhost/test';
app.PORT = process.env.PORT || 8080;
app.ENV = process.env.NODE_ENV || 'dev';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.get('/', function (req, res) {
    res.send('hello');
});

app.listen(app.PORT, function () {
  console.log('Server running in ' + app.ENV + ' at ' + app.PORT + '.');
});
