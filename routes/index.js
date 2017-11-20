'use strict'
const express = require('express');
const usercontroller = require('/controller/usercontroller');

module.exports = function(app){
  
    
  app.use(express.static("views"));
  app.route('/').get(function(req,res){
    
    res.rediret("/views/");
    
  });
  
  app.route('/createUser').get(function(req,res){
    
    
    
  });
  
  
}