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
    
    initialize: function(){
      this.model = new MovieModel();
      this.listenTo(this.model, 'invalid', this.showError);
    },
    
    showError: function (model) {
      $(this.el).find('#error').html(model.validationError);
      $(this.el).find('.error-group').show();
    },

    reset: function () {
      $(this.el).find('.error-group').hide();
    },

    submit: function (e) {
      e.preventDefault();
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
      this.model.save(movieData);
      this.collection.add(this.model);
    },

    render: function () {
      $(this.el).html(movieTemplate({
        geners: genersLib.get()
      }));
      return this;
    }
  });
});