var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.send("hwfar");
})
app.get('/test',function(req,res){
    res.send("second route");
    var knockknock = require('knock-knock-jokes');

 res.writeHead(200, {'Content-Type': 'text/html'});
var randomJoke = knockknock()
 res.end(randomJoke);
})

var knockknock = require('knock-knock-jokes');

 res.writeHead(200, {'Content-Type': 'text/html'});
var randomJoke = knockknock()
 res.end(randomJoke);


app.listen(8080);