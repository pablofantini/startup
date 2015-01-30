define([
  'backbone',
  'backboneStorage',
  'model/Movie'
], function (Backbone, BackboneStorage, ModelMovie) {
  return Backbone.Collection.extend({
    model: ModelMovie,
    localStorage: new Backbone.LocalStorage("MOVIE"),
  });
});