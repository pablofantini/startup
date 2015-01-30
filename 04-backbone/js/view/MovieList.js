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
      $(this.el).html(movieListTemplate({movies: this.collection.models}));
    }
  });

});