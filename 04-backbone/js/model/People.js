define([
  'backbone'
], function (Backbone) {

  return Backbone.Model.extend({
    defaults: {
      'firstName': '',
      'lastName': '',
      'role': ''
    },

    validate: function (attributes) {
      if (attributes.firstName === '') {
        return "Remember to set a firstName.";
      }
      if (attributes.lastName === '') {
        return "Remember to set a lastName.";
      }
      if (attributes.role === '') {
        return "Remember to set a role.";
      }
    },

    initialize: function () {
      this.on("invalid", function (model, error) {
        console.log(error);
      });
    }
  });

});