//Config requilejs
requirejs.config({
  //main
  deps: ['backbone', 'hbs','main'],
  
  // Base url
  baseUrl: 'js/',

  paths: {
    jquery: 'external/jquery.min',
    backbone: 'external/backbone.min',
    backboneStorage: 'external/backbone.localStorage-min',
    underscore: 'external/underscore',
    hbs: 'external/hbs',
    
    // Main file
    main: 'main',
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