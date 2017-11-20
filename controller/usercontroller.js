'use strict'

var collection = require('../model/collection');
var card = require('../model/card');
var collectioncontroller = require('../controller/collectioncontroller');
const mongoose = require('mongoose');

module.exports = {
  createCollection: function(req,res){
    var newCollection = new collection();
    newCollection.name = req.query.name;
    console.log(req.query.name);
    
    
    newCollection.save(function(err){
      if(err)
      throw err;
    })
  }
  
  
  