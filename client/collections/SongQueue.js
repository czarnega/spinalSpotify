// var Backbone = require('backbone');
// var SongModel = require('../models/SongModel');

var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  	// event listener for adding a song
  	this.on('add',() => this.playFirst())

  	// event listener for removing a song
  	this.on('dequeue', (song) => this.dequeue(song))

  	// event listener for when a song ends
  	this.on('ended', () => this.playNext())
  },

  enqueue: function(song){
  	if(this.length === 1) this.playFirst();
  },

  dequeue: function(song){
  	this.at(0) === song ? this.playNext() : this.remove(song);
  },

  playFirst: function() {
  	this.at(0).play();
  },

  playNext: function() {
  	this.shift();
  	this.length >= 1 ? this.playFirst() : this.trigger('stop');
  }

});

// module.exports = SongQueue;

