let mongoose = require ('mongoose');

//articles schema

let articleSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	make:{
        type: String,
		required: true
	},
	category:{
        type: String,
		required: true
	},
  hp:{
        type: Number,
		required: true
	},
  height:{
        type: Number,
    required: true
  },

});

let Article = module.exports = mongoose.model('Article', articleSchema);
