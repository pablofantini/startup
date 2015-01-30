define([
  'backbone',
  'lib/geners',
  'hbs!../templates/movie',
], function (Backbone, genersLib, movieTemplate) {

  return Backbone.View.extend({
    el: $('body'),
    tagName: 'div',

    events: {
      'submit form.edit': 'submit',
      'reset form.edit': 'reset'
    },

    reset: function () {
      $(this.el).find('.error-group').hide();
    },
    
    initialize: function(){
      this.listenTo(this.collection, 'invalid', this.showError);
    },
    
    showError: function (model) {
      $(this.el).find('#error').html(model.validationError);
      $(this.el).find('.error-group').show();
    },

    submit: function (e) {
      e.preventDefault();
      var $form = $(e.currentTarget);
      
      var movie = this.collection.get($form.find('#cid').val());
      movie.get('director').firstName = $form.find('#director-first-name').val();
      movie.get('director').lastName = $form.find('#director-last-name').val();
      
      movie.save({
        name: $form.find('#name').val(),
        year: $form.find('#year').val(),
        gener: $form.find('#gener').val(),
        description: $form.find('#description').val(),
        plot: $form.find('#plot').val() != '' ? $form.find('#plot').val() : movie.defaults.plot,
        image: $form.find('#image').val() != '' ? $form.find('#image').val() : movie.defaults.image,
        ranking: $form.find('#ranking').val(),
      });
    },

    render: function (cid) {
      var movie = this.collection.get(cid);
      $(this.el).html(movieTemplate({
        geners: genersLib.get(),
        cid: movie.cid,
        movie: movie.attributes
      }));
      $('#gener').val(movie.get('gener'));
    }
  });
});