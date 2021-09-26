var express = require('express');
var router = express.Router();
var user = require("../controllers/UserController.js");

router.get('/',async function(request, response,next){
    response.render('index',{tiltle:'Resident Management', message:''});
});

router.post('/',async function(request,response){
    await user.login(request,response);
});

module.exports = router;