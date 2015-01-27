'use strict';

/**
 * Controller of application
 */
angular.module('app.controllers', [])

/**
 * Movies list controller
 */
.controller('MoviesCtrl', ['$scope','MoviesFactory',
  function ($scope, MoviesFactory) {
    MoviesFactory.getMovieList(function(movies){
      $scope.movies = movies;
    });
}])

/**
 * Movie detail controller
 */
.controller('MovieDetailCtrl', ['$scope', '$location', '$routeParams', 'MoviesFactory',
  function ($scope, $location, $routeParams, MoviesFactory) {
    var movieId = $routeParams.id;
    $scope.movie = MoviesFactory.getMovie(movieId);
    if(!$scope.movie){
       $location.path('/movies');
    }
    
    $scope.delete = function () {
      console.log('delete');
      MoviesFactory.deleteMovie(movieId);
      $location.path('/movies');
    }
}])

/**
 * New movie controller
 */
.controller('MovieNewCtrl', ['$scope', '$location', 'MoviesGeners', 'MoviesFactory',
  function ($scope, $location, MoviesGeners, MoviesFactory) {
    
    function back(){
      $location.path('/movies');
    }

    $scope.geners = MoviesGeners.get();
    
    $scope.submit = function(){
      MoviesFactory.saveMovie($scope.movie);
      back();
    };
    
    $scope.goBack = function () {
      back();
    }
}])

/**
 * Edit movie controller
 */
.controller('MovieEditCtrl', ['$scope', '$location', '$routeParams', 'MoviesFactory', 'MoviesGeners',
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