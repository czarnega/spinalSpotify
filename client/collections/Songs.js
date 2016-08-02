// var Backbone = require('backbone');
// var SongModel = require('../models/SongModel');

var Songs = Backbone.Collection.extend({
	url: 'https://api.parse.com/1/classes/songs/',
	
  parse: function(data) {
    return data.results;
  },

  initialize: function(){
		this.fetch({
		  data: { limit: 20 }
		});
  },

  model: SongModel,

});

// module.exports = Songs;