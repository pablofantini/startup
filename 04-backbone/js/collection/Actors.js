define([
  'backbone',
  'backboneStorage',
  'model/people'
], function (Backbone, BackboneStorage, ModelPeople) {
  return Backbone.Collection.extend({
    model: ModelPeople,
    localStorage: new Backbone.LocalStorage("PEOPLE"),
  });
});