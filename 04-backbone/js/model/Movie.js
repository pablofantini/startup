define([
  'backbone'
], function (Backbone) {

  return Backbone.Model.extend({
    defaults: {
      'name': '',
      'year': '',
      'gener': 'unknow',
      'description': '',
      'plot': 'images/no_image.jpg',
      'image': 'images/no_banner.jpg',
      'ranking': 0,
      'director': ''
    },

    validate: function (attributes) {
      if (attributes.name === '') {
        return 'Input name'
      }
      
      if (attributes.ranking > 10 || attributes.ranking < 0) {
        return 'The ranking must be between 0 and 10'
      }
      
      if (attributes.year === '' || attributes.year > 2015 || attributes.year < 1900) {
        return 'Year not is valid'
      }
    },
    
    save: function(attributes, options) {
        attributes || (attributes = {});
        this.set(attributes);
        if(this.isValid()){
          Backbone.Model.prototype.save.call(this, attributes, options);
        }
      },

  });

});