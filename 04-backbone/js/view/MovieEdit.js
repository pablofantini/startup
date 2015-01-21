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
      'reset form.edit': 'reset',
    },

    reset: function () {
      $(this.el).find('.error-group').hide();
    },

    submit: function (e) {
      e.preventDefault();
      console.log('Edit Movie');
      var $form = $(e.currentTarget)
      
      var movie = this.collection.get($form.find('#cid').val());
      movie.get('director').firstName = $form.find('#director-first-name').val();
      movie.get('director').lastName = $form.find('#director-last-name').val();
      
      movie.set({
        name: $form.find('#name').val(),
        year: $form.find('#year').val(),
        gener: $form.find('#gener').val(),
        description: $form.find('#description').val(),
        plot: $form.find('#plot').val(),
        image: $form.find('#image').val(),
        ranking: $form.find('#ranking').val(),
      });

      if (movie.isValid()) {
        movie.save();
      } else {
        $(this.el).find('#error').html(movie.validationError)
        $(this.el).find('.error-group').show();
      }
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