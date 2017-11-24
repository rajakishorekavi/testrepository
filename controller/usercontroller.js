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
      
      
      if(users[0].password == req.query.password)
        {
         // res.render('/static/homepage.html', users);
        //  res.sendFile('/static/homepage.html');
          res.json({status: 200, message : "success"});
        }
      else
        {
          res.write("Wrong User");
          res.end();
        }

    res.end();
      
    })
    
    
    
  }
  
  
  
  
  
  
}