 'use strict'
 
//Config requirejs
requirejs.config({
  
  // Base url
  baseUrl: '',

  paths: {
    jquery: 'js/external/jquery.min',
    backbone: 'js/external/backbone.min',
    backboneStorage: 'js/external/backbone.localStorage-min',
    underscore: 'js/external/underscore',
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    backboneStorage: {
      deps: ['backbone'] 
    },
  }
});

require([], function () {

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  // generate spec list
  var specs = [];
  specs.push('spec/model/movieSpec');
  specs.push('spec/model/peopleSpec');
  
  $(function () {
    require(specs, function (spec) {
      jasmineEnv.execute();
    });
  });

});