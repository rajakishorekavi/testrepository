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
    
  }
  
  
  
  
  
  
}