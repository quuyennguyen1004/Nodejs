var express = require('express');
var router = require.Router();
var resident = require("");

router.get('/', async function(request,response){
   resident.list(request,response);
});

router.get('/show/:id',async function(request,response){
    await resident.show(request,response);
});

router.get('/create', async function(request,response){
    await resident.create(request,response);
});

router.post('/save',async function(request,response){
    await resident.save(request,response);
});

router.get('/edit/:id', async function(request,response){
    await resident.edit(request,response);
});

router.post('/update/:id',async function(request,response){
    await resident.update(request,response);
});

router.post('/delete/:id', async function(request,response){
    await resident.delete(request,response);
});

module.exports = router;