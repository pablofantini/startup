'use strict';

/**
 * application initial configuration
 * router configuration
 */
angular.module('app', [
  'ngRoute',
  'app.movie.list.controller',
  'app.movie.list.service',
  'app.movie.detail.controller',
  'app.movie.new.controller',
  'app.movie.edit.controller',
  'app.movie.factory',
  'app.movie.gener.factory'
])

/**
 * Initial configuration
 * Configure router
 */ 
.config(['$routeProvider',
  function ($routeProvider) {

    $routeProvider
      .when('/movies', {
        controller: 'MovieListController',
        templateUrl: 'app/components/movieList/movieListView.html'
      })

    .when('/movie/:id', {
      controller: 'MovieDetailController',
      templateUrl: 'app/components/movieDetail/movieDetailView.html'
    })

    .when('/movies/new', {
      controller: 'MovieNewController',
      templateUrl: 'app/shared/movieForm/movieFormView.html'
    })

    .when('/movie/:id/edit', {
      controller: 'MovieEditController',
      templateUrl: 'app/shared/movieForm/movieFormView.html'
    })

    ;

    $routeProvider.otherwise('/movies');
  }
])

/**
 * Run application
 * Configure template cache
 */ 
.run(['$templateCache','$http',
  function($templateCache, $http){
    $http.get('app/components/movieList/movieListView.html', {cache:$templateCache});
    $http.get('app/components/movieDetail/movieDetailView.html', {cache:$templateCache});
    $http.get('app/shared/movieForm/movieFormView.html', {cache:$templateCache});
  }
])

;