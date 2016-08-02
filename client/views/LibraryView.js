// var Backbone = require('backbone');

var LibraryView = Backbone.View.extend({

  tagName: 'div',
  className: 'songlist',
  id: 'plwrap',

  initialize: function() {
    this.render();
    
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    var songList = _.template('<h3>Library</h3><div class="plHeader"><div class="plArt"></div><div class="plArtist">Artist</div><div class="plTitle">Track</div><div class="plPlaycount">Playcount</div></div><ul id="plList" class="library"></ul>')

    this.$el.html(songList);
    this.$el.find('.library')
    .append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});

// module.exports = LibraryView;
