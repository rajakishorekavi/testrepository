'use strict'

var user = require('../model/user');
const mongoose = require('mongoose');

module.exports = {
//   add: function(a,b,cb){
//     var ele = a+b;
//     var x;
//     cb(ele);
//   },
  createUser: function(req,res){
    
    var newUser = new user();
    newUser.username=req.query.username;
    newUser.password=req.query.password;
    
    newUser.save(function(err){
      if(err)
      throw err;
    });
    
  },
  
  loginUser: function(req, res){
    
    user.find({'username': req.query.username}, function(err, users){
      
      if(err)
      throw err;
      
    //  res.writeHead(200, {'Content-Type': 'text/html'});
   //   res.write(JSON.stringify(users));
      
   //   res.write(users[0].username);
      
      console.log('i am called');
      console.log(users[0]);
      console.log(req.query.password);
      if(users[0].password == req.query.password)
        {
          console.log('i am called');
        res.redirect('/static/homepage.html');
          //res.end('welcome user');
          
         // res.json({status: 200, message : "success"});
        }
      else
        {
//          res.write("Wrong User");
          res.end("Wrong user");
        }
      
    });   
  },
  getUser: function(req,res){
    user.find({})
  }
  
}