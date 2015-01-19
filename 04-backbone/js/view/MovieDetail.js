define([
  'backbone',
  'hbs!../../template/movieDetail',
], function (Backbone, movieTemplate) {

  return Backbone.View.extend({
    el: $('body'),
    tagName: 'article',

    events: {
      "click .edit": "edit",
      "click .delete": "delete",
      /*
      "click .icon.doc": "select",
      "contextmenu .icon.doc": "showMenu",
      "click .show_notes": "toggleNotes",
      "click .title .lock": "editAccessLevel",
      "mouseover .title .date": "showTooltip"
      */
    },

    edit: function () {
      console.log('edit!!!!');
    },
    
    delete: function () {
      if(confirm('are you sure to delete this movie?')) {
        console.log('borrar'); 
       }
    },

    render: function (cid) {
      $(this.el).html(movieTemplate({cid: cid, movie: this.collection.get(cid).attributes}));
      return this;
    }
  });

});