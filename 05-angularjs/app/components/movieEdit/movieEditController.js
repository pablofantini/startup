'use strict';

/**
 * Movie Edit Module of application
 */
angular.module('app.movie.edit.controller', [])

/**
 * Edit movie controller
 */
.controller('MovieEditController', ['$scope', '$location', '$routeParams', 'MoviesFactory', 'MoviesGeners',
  function ($scope, $location, $routeParams, MoviesFactory, MoviesGeners) {
    
    function back(){
      $location.path('/movie/'+movieId);  
    }
    
    var movieId = $routeParams.id;
    $scope.geners = MoviesGeners.get();
    $scope.movie = MoviesFactory.getMovie(movieId);
    if(!$scope.movie){
       $location.path('/movies');
    }
    $scope.submit = function(){
      MoviesFactory.saveMovie($scope.movie);
      back();
    };
    
    $scope.goBack = function () {
      back();
    }
    
}])

;