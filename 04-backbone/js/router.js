define([
  'backbone',
  'view/MovieDetail',
  'view/MovieList',
  'view/MovieNew',
], function (Backbone, MovieDetailView, MovieListView, MovieNewView) {

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
          'movie/:id/delete': 'movieDelete',
          '*actions': 'defaultRoute' // Backbone will try match the route above first
        }
      });
      // Instantiate the router
      var app = new AppRouter;

      // Create MovieDetail View
      var movieDetailView = new MovieDetailView({
        collection: movieCollection
      });
      
      // Create MovieList View
      var movieListView = new MovieListView({
        collection: movieCollection
      });
      
      // Create MovieList New
      var movieNewView = new MovieNewView({
        collection: movieCollection
      });
      
      app.on('route:listMovies', function () {
        movieListView.render();
      });
      app.on('route:movie', function (id) {
        movieDetailView.render(id);
      });
      app.on('route:movieNew', function () {
        movieNewView.render();
      });
      app.on('route:movieEdit', function (id) {
        console.log('edit movie: ' + id);
      });
      app.on('route:movieDelete', function (id) {
        console.log('delete movie: ' + id);
      });

      app.on('route:defaultRoute', function (actions) {
        app.navigate('movies');
      });

      // Start Backbone history
      Backbone.history.start();
    }
  }

});