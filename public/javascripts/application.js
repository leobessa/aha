var App = {
  Views: {},
  Controllers: {},
  Collections: {},
  init: function() {
    new App.Controllers.Learnings();
    Backbone.history.start();
  }
};

$(function() {
  App.init();
});