'use strict'
const express = require('express');

module.exports = function(app){
  
    
  app.use(express.static("views"));
  app.route('/').get(function(req,res){
    
    res.rediret("/views/");
    
  });
  
}