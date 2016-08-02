// var Backbone = require('backbone');

var AppView = Backbone.View.extend({
  tagName: 'div',
  className: 'app',
  id: 'mainwrap',

  initialize: function(params) {
    this.visualizerView = new VisualizerView({model: this.model.get('currentSong')});
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      this.visualizerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.visualizerView.$el,
      this.playerView.$el,
      this.queueView.$el,
      this.libraryView.$el,
    ]);
  }
});

// module.exports = AppView;
