var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.send("hwfar");
});
app.get('/test',function(req,res){
    res.send("second route");
});
app.get('/add',function(req,res){
    var x = req.query.x;
    var y = req.query.y;
    res.send("X+Y="+(x+y));
});
app.get('/calc',function(req,res){
    var x = req.query.x;
    var y = req.query.y;
    var operator =req.query.operator;
    if(operator === "add"){
        res.send(x+"+"+y+"="+ x+y);
    }else if(operator === "sub"){
        res.send(x+"-"+y+"="+ x-y);
    }else if(operator === "div"){
        res.send(x+"/"+y+"="+ x/y);
    }else if(operator === "mul"){
        res.send(x+"*"+y+"="+ x*y);
}
});

        
    
app.listen(8080);