'use strict';

/**
 * Movie List Module of application
 */
angular.module('app.movie.list.controller', [])

/**
 * Movies list controller
 */
.controller('MovieListController', ['$scope','MoviesFactory', '$timeout',
  function ($scope, MoviesFactory, $timeout) {
    MoviesFactory.getMovieList().then(function(movies){
      $scope.movies = movies;
    });
}])