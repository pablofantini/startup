define([
  'backbone'
], function (Backbone) {

  return Backbone.Model.extend({
    defaults: {
      'name': '',
      'year': '',
      'gener': 'unknow',
      'description': '',
      'plot': 'images/no_images.jpg',
      'image': 'images/no_images.jpg',
      'raking': 0,
      'actors': '',
      'director': ''
    },

    validate: function (attributes) {
      if (attributes.name == '') {
        return false
      }
      
      if (attributes.raking > 10 || attributes.raking < 0) {
        return false
      }
    },

    initialize: function () {

      this.on('change', function () {
        console.log('- Values for this model have changed.');
      });

      this.on("invalid", function (model, error) {
        console.log(error);
      });

      console.log('New movie model was created.');
    },

  });

});