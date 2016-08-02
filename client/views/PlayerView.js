// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  // tagName: 'div',

  template: function(){
    var nowPlay = '<div id="nowPlay"><span class="left" id="npAction">Paused...</span><span class="right" id="npTitle"></span></div>'
    var audioWrap = '<div id="audiowrap"><div id="audio0"><audio controls src=<%= url %> id="audio1" controls="controls">Your browser does not support HTML5 Audio!</audio></div>'
    var tracks = '</div><div id="tracks"><a id="btnPrev">&laquo;</a><a id="btnNext">&raquo;</a></div></div>'

    return _.template(nowPlay+audioWrap+tracks)
  },

  initialize: function() {
  },

  events: {
    'play': function(){
      console.log('play event fired in PlayerView');
    },
    'loaded': function() {
      console.log('loaded event fired in PlayerView')
    },
    'ended': function() {
      // calls the ended method on the song model
      this.model.ended();
    }
  },

  setSong: function(song) {
    this.model = song;
    if (!this.model) {
      this.el.pause();
    }
    this.render();
  },

  render: function() {
    // var templater = this.template();
    // return this.$el.html(templater(this.model.attributes));
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
