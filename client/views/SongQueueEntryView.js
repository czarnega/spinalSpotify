// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'li',

  template: _.template('<div class="plItem"><div class="plNum"><%= num %></div><div class="plArtist"><%= artist %></div><div class="plTitle">(<%= title %>)</div></div>'),

  events: {
    'click': function() {
      this.model.dequeue(this.model);
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
