const express = require ('express');
//included with nodejs by default, no need to install it
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost.chuzemoto_motos.motorcycles');
let db = mongoose.connection;

//check connection
db.once('open',function(){
  console.log('connected to mongodb');
});
//check for db errors
db.on('error', function(err){
  console.log:(err);
});

//Init app
const app = express();

//Bring in models
let Article = require('./models/article');

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', function(req, res){
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    } else {
    res.render('index', {
      title: 'articles',
      articles: articles
    });
  }
});
});



//add route
app.get('/articles/add', function(req,res){
  res.render('add_article',{
    title:'add article'

  });
});
//start server
app.listen(3000, function(){
  console.log('server started on port 3000...');
});
  

 


