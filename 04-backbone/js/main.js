require([
  'backbone',
  'router',
  'defaultData',
  'collection/Movies',
], function (Backbone, router, defaultData, MoviesCollection) {
  
  $(document).ready(function () {
    var movieCollection = new MoviesCollection();
    movieCollection.fetch();
    
    // generate default movie data if not exist
    if(!defaultData.isDefaultLoad()) {
      defaultData.makeData(movieCollection); 
    }

    // Start router
    router.start(movieCollection);
  });
});