var express = require('express');
var router = express.Router();

router.get('/', async function(request,response,next){
    request.send('Response with a resource');
});

module.exports=router;