define([
  'backbone',
  'lib/geners',
  'model/People',
  'model/Movie',
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
      var movieData = {
        name: $('#name').val(),
        year: $('#year').val(),
        gener: $('#gener').val(),
        description: $('#description').val(),
        ranking: $('#ranking').val(),
        director: director.attributes,
      }
      if($('#plot').val()){
        movieData.plot = $('#plot').val();
      }
      if($('#image').val()){
        movieData.image = $('#image').val();
      }
      
      var newMovie = new MovieModel(movieData);

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