'use strict';

/**
 * application initial configuration
 * router configuration
 */
angular.module('app', [
    'ngRoute',
    'app.controllers',
    'app.services',
    'app.factories'
])


.config(['$routeProvider',
  function ($routeProvider) {

    $routeProvider
      .when('/movies', {
        controller: 'MoviesCtrl',
        templateUrl: 'app/template/movie.list.html',
      })

    .when('/movie/:id', {
      templateUrl: 'app/template/movie.detail.html',
      controller: 'MovieDetailCtrl'
    })

    .when('/movies/new', {
      templateUrl: 'app/template/movie.form.html',
      controller: 'MovieNewCtrl'
    })

    .when('/movie/:id/edit', {
      templateUrl: 'app/template/movie.form.html',
      controller: 'MovieEditCtrl'
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
    $http.get('app/template/movie.list.html', {cache:$templateCache});
    $http.get('app/template/movie.detail.html', {cache:$templateCache});
    $http.get('app/template/movie.form.html', {cache:$templateCache});
  }
])

;