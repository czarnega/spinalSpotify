// var Backbone = require('backbone');

var SongModel = Backbone.Model.extend({

  play: function() {
  	console.log('play event triggered in SongModel')
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
  	console.log('enqueue event triggered in SongModel')
  	this.trigger('enqueue', this);
  },

  dequeue: function() {
  	this.trigger('dequeue', this);
  },

  ended: function() {
  	this.trigger('ended', this);
  }

});

// module.exports = SongModel;
