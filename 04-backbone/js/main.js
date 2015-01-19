require([
  'backbone',
  'router',
  'defaultData',
  'collection/Movies',
], function (Backbone, router, defaultData, MoviesCollection) {
  
  // generate default movie data if not exist
  if(!defaultData.isDefaultLoad()) {
    defaultData.makeData(); 
  }
  
  var movieCollection = new MoviesCollection();
  movieCollection.fetch();

  router.start(movieCollection);
});