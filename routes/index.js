'use strict'

const express = require('express');
var usercontroller = require('../controller/usercontroller');

module.exports = function(app){
  
   
  
  app.route('/').get(function(req,res){
    
    res.redirect('/static/');
   //  var a =1;
   //  var b=2;
   //  var c;
   //  usercontroller.add(a,b,function(val){c =val; });
   //  console.log(c);
   // res.end("Hai");
    
  });
  
  app.route('/createUser').get(function(req,res){
    
    usercontroller.createUser(req,res);
    res.end("User Created");
    
    
  });
  
  app.route('/loginUser').get(function(req,res){
    
    usercontroller.loginUser(req,res);
   / res.redirect('/static/homepage.html');
    
    
    
    
    
  });
  
  
}