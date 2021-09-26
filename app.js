var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
//connect to mongo
mongoose.connect(`mongodb://${config.hostmongo}:${config.portmongo}/${config.db}`)
    .then(() => console.log('connection succesfully'))
    .catch((err) => console.log(err));
// Declare router
var index = require('./routes/index');
var user = require('./routes/user');
var resident = require('./routes/resident');
var app = express();

