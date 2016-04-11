var express = require('express');
var bodyParser = require('body-parser');

var api = express.Router();

api.use(bodyParser.json());

api.get('/test', function(req, res) {
  res.json({test: 'test'});
});

api.all('*', function(req, res) {
  res.status(404).json({message: 'path not found'});
});

module.exports = api;
