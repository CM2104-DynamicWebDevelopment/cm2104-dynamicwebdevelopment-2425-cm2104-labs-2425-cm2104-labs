var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.send("hwfar");
})
app.get('/test',function(req,res){
    res.send("second route");
})
app.listen(8080);