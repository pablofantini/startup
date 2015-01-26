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


.config(["$routeProvider",
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

    .when('/movie/new', {
      templateUrl: 'app/template/movie.new.html',
      controller: 'MovieNewCtrl'
    })

    .when('/movie/:id/edit', {
      templateUrl: 'app/template/movie.edit.html',
      controller: 'MovieEditCtrl'
    })

    ;

    $routeProvider.otherwise('/movies');
}])


.config([function(){
  console.log('start application');
}])

;