App.Views.LearningList = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, "render");
    this.render();
  },

  render: function() {
    var header = $("#header");
    var newLearning = new Learning;
    var learningNewView = new App.Views.LearningNew({ model: newLearning });
    header.append(learningNewView.render().el);
    var list = $("#learnings");
    list.empty();
    this.collection.each(function (learning) {
      var learningView = new App.Views.LearningShow({ model: learning });
      list.append(learningView.render().el);
    });
    return this;
  }
});

App.Views.LearningShow = Backbone.View.extend({
  tagName: "li",

  events: {
    "click .delete": "deleteLearning"
  },

  initialize: function () {
    _.bindAll(this, "render");
    this.model.view = this;
  },

  render: function () {
    $(this.el).append(JST.learning({model: this.model}));
    return this;
  },

  deleteLearning: function (e) {
    e.preventDefault();
    this.model.destroy({
      success: function(model, response) {
        model.view.remove();
      },
      error: function(model, response) {
        new Error({ message: "Error deleting learning." });
      }
    });
  }

});


App.Views.LearningNew = Backbone.View.extend({
  tagName: "form",

  events: {
    "click #learning_submit": "submit",
  },

  initialize: function () {
    _.bindAll(this,"submit")
    this.model.view = this;
  },

  submit: function(e) {
    e.preventDefault();
    this.model.save({learning: {content: $('#learning_content').val()}});
  },

  render: function () {
    $(this.el).append(JST.learning_new({model: this.model}));
    return this;
  }

});