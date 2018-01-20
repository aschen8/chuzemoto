const express = require ('express');
//included with nodejs by default, no need to install it
const path = require('path');
const mongoose = require('mongoose');
//connects to Mongodb
mongoose.connect('mongodb://localhost/chuzemoto_motos');
let db = mongoose.connection;

//check connection
db.once('open',function(){
	console.log('connected to mongodb');
});
//check for db errors
db.on('error', function(err){
	console.log(err);
});

//Init app
const app = express();

//Bring in models
let Article = require('./models/article');

//load view engine(this is taken from traversy video)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// //load view engine
// app.use(express.static(__dirname + '/public'));

//home route
app.get('/', function(req, res){
//this is not the articles database
	Article.find({}, function(err, motorcycles){
		if(err){
			console.log(err);
		} else {
		res.render('index', {
			name: 'motorcycles',
			make: '',
			category: '',
			hp: '',
			height: '',
			motorcycles : motorcycles
		});
	}
});
});

// //add route to bikefit
app.get('/bikefit', function(req, res){
Article.find({}, function(err, motorcycles){
	if(err){
		console.log(err);
	} else {
	res.render('bikefit', {
		name: 'motorcycles',
		make: '',
		category: '',
		hp: '',
		height: '',
		motorcycles : motorcycles
	});
}
});
});


// //add route
// app.get('/articles/add', function(req,res){
// 	res.render('add_article',{
// 		title:'add article'
//
// 	});
// });
//start server
app.listen(3000, function(){
	console.log('server started on port 3000...');
});
