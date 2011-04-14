var Learning = Backbone.Model.extend({

  initialize: function() {
    if (this.attributes['_id']){
      this.id = this.attributes['_id']
    }
  },

  url : function() {
    var base = 'learnings';
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
  },

  save: function() {
    console.log('addOne');
  }
});
