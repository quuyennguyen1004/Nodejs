var express = require('express');
var router = require.Router();
var user = require("");

router.get('/',async function(request, response,next){
    response.render('index',{tiltle:'Resident Management', message:''});
});

router.post('/',async function(request,response){
    await user.login(request,response);
});

module.exports = router;