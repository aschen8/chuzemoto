var express = require ('express');
var router = express.Router();
var mongo = require('mongodb');
//assert is built-in package in node.js
var assert = require('assert');

//mongodb port and database used
var url = 'mongodb://localhost:27017/chuzemoto_motos';

//GET home page
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('get-data', function(req, res, next)
});

router.post('/insert', funciton(req, res, next){

});

