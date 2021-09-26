var mongoose = require('mongoose');
var UserShema = new mongoose.Schema({
    name: String,
    password: String
});
module.exports=mongoose.model('User',UserShema);