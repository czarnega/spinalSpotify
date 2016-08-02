// var Backbone = require('backbone');

var LibraryEntryView = Backbone.View.extend({

  tagName: 'li',

  template: _.template('<div class="plItem"><div class="plArt"><img src=<%= artwork_url %> alt="" /></div><div class="plArtist"><%= artist %></div><div class="plTitle">(<%= title %>)</div><div class="plPlaycount">1</div></div>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});

// module.exports = LibraryEntryView;
