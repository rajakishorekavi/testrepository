'use strict'

var user = require('../model/user');
const mongoose = require('mongoose');

module.exports = {
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
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      
      if(users[0].password == req.query.password)
        {
          res.redirect("/views/homepage.html");
          res.end();
        }
      else
        {
          res.write("Wrong User");
          res.end();
        }

    
    })
    
    
    
  }
  
  
  
  
  
  
}