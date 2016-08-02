// var Backbone = require('backbone');
// var SongModel = require('../models/SongModel');

var Songs = Backbone.Collection.extend({

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