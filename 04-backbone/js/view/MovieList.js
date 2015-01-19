define([
  'backbone',
  'hbs!../../template/movieList',
], function (Backbone, movieListTemplate) {

  return Backbone.View.extend({
    el: $('body'),
    tagName: 'div',

    events: {
      "click .image": "open", 
      /*
      "click .icon.doc": "select",
      "contextmenu .icon.doc": "showMenu",
      "click .show_notes": "toggleNotes",
      "click .title .lock": "editAccessLevel",
      "mouseover .title .date": "showTooltip"
      */
    },

    open: function () {
      console.log('OPEN!!!!');
    },
    
    initialize: function(){
      this.listenTo(this.collection, "change", this.render);  
    },

    render: function () {
      $(this.el).html(movieListTemplate({movies: this.collection.models}));
      return this;
    }
  });

});