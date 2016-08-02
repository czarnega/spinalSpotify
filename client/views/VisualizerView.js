// var visualizer = '<div id="visualizer_wrapper"><canvas id="canvas" width="800" height="350"></canvas></div>';
// PlayerView.js - Defines a backbone view class for the music player.
var VisualizerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div id="visualizer_wrapper"><canvas id="canvas" width="800" height="350"></canvas></div>',
  // tagName: 'div',


  initialize: function() {
  },

  events: {
  	'play': function(){
  	  console.log('play event fired');
  	},
  	'loaded': function() {
  		console.log('loaded event fired in VisualizerView')
  	},
    'ended': function() {
      // calls the ended method on the song model
      this.model.ended();
    }
  },

  setSong: function(song) {
    this.model = song;
    console.log('song in VisualizerView:',song)
    if (!this.model) {
      // this.el.pause();
    }
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
