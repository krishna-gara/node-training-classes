var express = require('express');
var app = express(); 

var bodyParser = require('body-parser'); 
const { request } = require('express');
const mongoose = require('mongoose'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user", function(req,res){
    mongoose.connect('mongodb://127.0.0.1:27017/geeksforgeeks', { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    }); 
    var test;
    const User = mongoose.model('employee', { 
        name: { type: String }, 
        age: { type: Number },
        address :  { type: String }
    }); 
    User.find({ name: 'sudha'}, function (err, docs) { 
        if (err){ 
            console.log(err); 
        } 
        else{ 
            console.log("First function call : ", docs); 
            test = docs;
        } 
    });
    res.send(test);
});


app.post("/user",function(req , res){

    mongoose.connect('mongodb://127.0.0.1:27017/geeksforgeeks', { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    }); 
    
    const User = mongoose.model('employee', { 
        name: { type: String }, 
        age: { type: Number },
        address :  { type: String }
    }); 

    var new_user = new User({ 
        name: req.body.name, 
        age:req.body.age,
        address: req.body.address 
    }); 

    new_user.save(function(err,result){ 
        if (err){ 
            console.log(err); 
        } 
    });
    res.send("Post method");
});




app.listen(3000, function(){
    console.log("server is running on port no 3000")
})

