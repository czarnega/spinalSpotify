// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'div',
  className: 'songlist',
  id: 'plwrap',

  initialize: function() {
  	this.render();
  	this.collection.on('add',function(){
  	  this.render();
  	},this);
  	this.collection.on('remove',function(){
  	  this.render();
  	},this);
  },

  render: function() {
  	// to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
  	// see http://api.jquery.com/detach/
  	this.$el.children().detach();

    var songList = this.collection.length > 0 ? (
      _.template('<h3>Queue</h3><div class="plHeader"><div class="plNum"></div><div class="plArtist">Artist</div><div class="plTitle">Track</div></div><ul id="plList" class="queue"></ul>')
    ) : (
      _.template('<h3>Queue</h3><ul id="plList" class="queue"></ul>')
    )

  	this.$el.html(songList);
    this.$el.find('.queue').append(
  	  this.collection.map(function(song,index){
        song.set({
          num: index + 1
        })
  	    return new SongQueueEntryView({model: song}).render();
  	  })
  	);
  }

});

