define([
  'backbone',
  'hbs!../templates/movieList',
], function (Backbone, movieListTemplate) {

  return Backbone.View.extend({
    el: $('body'),
    tagName: 'div',
    
    initialize: function(){
      this.listenTo(this.collection, "remove", this.render);
    },

    render: function () {
      this.options.router.navigate('#movies',{trigger : true});
      $(this.el).html(movieListTemplate({movies: this.collection.models}));
      return this;
    }
  });

});