var express = require('express');
var app = express(); 

var bodyParser = require('body-parser'); 
const { request } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello", function(req,res){
    res.send("get method");
});


app.listen(3000, function(){
    console.log("server is running on port no 3000")
})

