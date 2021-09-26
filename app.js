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

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',index);
app.use('/users',user);
 app.use('/resident',resident);

app.use(function(request,response,next){
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.listen(config.port, ()=>{
    console.log(`Server running at ${config.host}:${config.port}`);
});
