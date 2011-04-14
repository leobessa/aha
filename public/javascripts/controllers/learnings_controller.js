App.Controllers.Learnings = Backbone.Controller.extend({
  routes: {
    "":                         "index"
  },

  index: function() {
    var learnings = new App.Collections.Learnings();
    learnings.fetch({
      success: function() {
        new App.Views.LearningList({ collection: learnings });
      },
      error: function() {
        new Error({ message: "Error loading learnigs." });
      }
    });
  }
});

