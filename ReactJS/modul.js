const express = require('express');
const modul = require();

modul.get('/', function(req, res){
    res.send('Hello, World!\n');
});

modul.listen(8080, function(){
    console.log('Example app listening on port 8080!');
});

module.exports = modul;