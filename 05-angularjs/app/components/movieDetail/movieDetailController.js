'use strict';

/**
 * Movie Detail Module of application
 */
angular.module('app.movie.detail.controller', [])

/**
 * Movie detail controller
 */
.controller('MovieDetailController', ['$scope', '$location', '$routeParams', 'MoviesFactory',
  function ($scope, $location, $routeParams, MoviesFactory) {
    var movieId = $routeParams.id;
    $scope.movie = MoviesFactory.getMovie(movieId);
    if(!$scope.movie){
       $location.path('/movies');
    }
    
    $scope.delete = function () {
      MoviesFactory.deleteMovie(movieId);
      $location.path('/movies');
    }
}])

;