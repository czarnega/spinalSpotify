// var SongData require('./data/data.js');
// var Songs = require('./collections/Songs');
// var AppModel = require('./models/AppModel');
// var AppView = require('./views/AppView');

$(function() {
  // set up model objects
  // var HTML5_VISUAL = new Visualizer().ini();
  var library = new Songs(SongData);
  var app = new AppModel({library: library});

  // build a view for the top level of the whole app
  var appView = new AppView({model: app});

  // put the view onto the screen
  $('.add-bottom').html(appView.render());
});