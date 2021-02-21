const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const User = require('./models/user')


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/user1Db',  { useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')


app.get('/', function(req, res){
  res.render('home')
})

app.get('/login', function(req, res){
  res.render('login')
})

app.post('/login', function(req, res){
var username = req.body.username
var password = req.body.password
 User.findOne({email : username}, function(err, founduser){
   if(err){
     console.log(err)
   }else{
     if(founduser){
        if(founduser.password == password){
            res.render('secrets')
        }else{
          res.send('not mach')
        }
     }
   }

})
  })



app.get('/register', function(req, res){
  res.render('register')
})

app.post('/register', function(req, res){
  newuser = new User({
    email: req.body.username,
    password: req.body.password
  });
  newuser.save(function(err){
    if(err){
      console.log(err)
    }else{
      res.render('secrets')
    }
  })
});

app.listen('3000', function () {
    console.log('port 3000 working')
})
