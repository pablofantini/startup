define([
  'backbone',
  'backboneStorage',
  'model/movie'
], function (Backbone, BackboneStorage, ModelMovie) {
  return Backbone.Collection.extend({
    model: ModelMovie,
    localStorage: new Backbone.LocalStorage("MOVIE"),
  });
});