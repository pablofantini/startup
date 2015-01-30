define([
  'backbone',
  'hbs!../templates/movieDetail',
], function (Backbone, movieTemplate) {

  return Backbone.View.extend({
    el: $('body'),
    tagName: 'article',

    events: {
      'click .delete': 'delete',
    },
    
    initialize: function(){
      this.listenTo(this.collection, 'change', this.showMovie);
    },
    
    delete: function (e) {
      if(confirm('Are you sure to delete this movie?')) {
        var model = this.collection.get($(e.currentTarget).attr('data-cid'));
        model.destroy();
       }
    },
    
    showMovie: function(movie) {
      if(movie.isValid()){
        this.options.router.navigate('#movie/'+movie.cid,{trigger : true});
      }
    },

    render: function (cid) {
      $(this.el).html(movieTemplate({cid: cid, movie: this.collection.get(cid).attributes}));
    }
  });

});