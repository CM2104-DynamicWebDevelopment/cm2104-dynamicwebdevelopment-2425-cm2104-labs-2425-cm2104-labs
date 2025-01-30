var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.send("hwfar");
})
app.listen(8080);