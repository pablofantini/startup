'use strict';

/**
 * Movie New Module of application
 */
angular.module('app.movie.new.controller', [])

/**
 * New movie controller
 */
.controller('MovieNewController', ['$scope', '$location', 'MoviesGeners', 'MoviesFactory',
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

;