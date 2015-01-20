define([
  'backbone',
  'lib/geners',
  'model/people',
  'model/movie',
  'hbs!../templates/movie',
], function (Backbone, genersLib, PeopleModel, MovieModel, movieTemplate) {

  return Backbone.View.extend({
    el: $('body'),
    tagName: 'div',

    events: {
      'submit form.new': 'submit',
      'reset form.new': 'reset',
    },

    reset: function () {
      $(this.el).find('.error-group').hide();
    },

    submit: function (e) {
      e.preventDefault();
      console.log('New Movie');
      var director = new PeopleModel({
        firstName: $('#director-first-name').val(),
        lastName: $('#director-last-name').val(),
        role: 'Director'
      });
      var newMovie = new MovieModel({
        name: $('#name').val(),
        year: $('#year').val(),
        gener: $('#gener').val(),
        description: $('#description').val(),
        plot: $('#plot').val(),
        image: $('#image').val(),
        ranking: $('#ranking').val(),
        director: director.attributes,
      });

      if (newMovie.isValid()) {
        this.collection.add(newMovie);
        newMovie.save();
      } else {
        $(this.el).find('#error').html(newMovie.validationError)
        $(this.el).find('.error-group').show();
      }
    },

    render: function () {
      $(this.el).html(movieTemplate({
        geners: genersLib.get()
      }));
      return this;
    }
  });
});