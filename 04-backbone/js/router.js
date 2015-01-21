define([
  'backbone',
  'view/MovieDetail',
  'view/MovieList',
  'view/MovieNew',
  'view/MovieEdit',
], function (Backbone, MovieDetailView, MovieListView, MovieNewView, MovieEditView) {

  return {
    /**
     * Start router configuration
     * @param {Collection} movieCollection
     */ 
    start: function (movieCollection) {
      
      // Configure router
      var AppRouter = Backbone.Router.extend({
        routes: {
          'movies': 'listMovies',
          'movie/new': 'movieNew',
          'movie/:id': 'movie',
          'movie/:id/edit': 'movieEdit',
          'movie/:id/actors': 'actorEdit',
          '*actions': 'defaultRoute' // Backbone will try match the route above first
        }
      });
      
      // Instantiate the router
      var router = new AppRouter;

      // Create MovieDetail View
      var movieDetailView = new MovieDetailView({
        router: router,
        collection: movieCollection
      });
      
      // Create MovieList View
      var movieListView = new MovieListView({
        router: router,
        collection: movieCollection
      });
      
      // Create Movie New
      var movieNewView = new MovieNewView({
        collection: movieCollection
      });
      
      // Create Movie Edit
      var movieEditView = new MovieEditView({
        collection: movieCollection
      });
      
      router.on('route:listMovies', function () {
        movieListView.render();
      });
      router.on('route:movie', function (id) {
        movieDetailView.render(id);
      });
      router.on('route:movieNew', function () {
        movieNewView.render();
      });
      router.on('route:movieEdit', function (id) {
        movieEditView.render(id);
      });
      router.on('route:actorEdit', function () {
        console.log('edit actor list')
      });

      router.on('route:defaultRoute', function (actions) {
        router.navigate('movies');
      });

      // Start Backbone history
      Backbone.history.start();
    }
  }

});