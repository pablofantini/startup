define([
  'backbone',
  'hbs!../../template/movieNew',
], function (Backbone, movieNewTemplate) {

  return Backbone.View.extend({
    el: $('body'),
    tagName: 'div',

    events: {
      "click .image": "open",
    },

    open: function () {
      console.log('OPEN!!!!');
    },

    render: function () {
      $(this.el).html(movieNewTemplate({}));
      return this;
    }
  });
});