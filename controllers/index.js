//modeled after https://www.youtube.com/watch?v=ZKwrOXl5TDI&t=384s

var express = require ('express');
var router = express.Router();
var mongo = require('mongodb');
var bodyparser = require('body-parser');
//assert is built-in package in node.js
var assert = require('assert');
var mongoose = require('mongoose');


//mongodb port
var url = 'mongodb://localhost:27017/chuzemoto_motos';

var databaseUrl = 'chuzemoto_motos';
var collections = ['motorcycles'];

//
// mongoose.connect("mongodb://localhost/chuzemoto_motos", {
//   useMongoClient: true
// // });
// mongo.connect(url, function(err, db){
//   	assert.equal(null,err);
//   	var cursor = db.collection('motorcycles').find();
//   	cursor.forEach(function(doc, err){
//   		assert.equal(null,err);
//   		resultArray.push(doc);
//   	})
// });

//GET home page
router.get('/', function(req, res, next) {
	res.render('');
});

router.get('get-data', function(req, res, next) {
var resultArray = [];
	 mongo.connect(url, function(err,db){
  	assert.equal(null,err);
  	var cursor = db.collection('motorcycles').find();
  	cursor.forEach(function(doc, err){
  		assert.equal(null,err);
  		resultArray.push(doc);
  	}, function(){
  		db.close();
  		res.render('', {items:resultArray});
  	});
  });
  });
	

  

 


