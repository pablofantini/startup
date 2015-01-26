'use strict';

/**
 * Controller of application
 */
angular.module('app.controllers', [])

/**
 * Movies list controller
 */
.controller('MoviesCtrl', ['$scope',

  function ($scope) {
    console.log('movies list');
    $scope.movies = [
      { id: 1, name: 'blaaaa', plot: 'asdasdasd.jpg'},
      { id: 2, name: 'bldfsdaaaa', plot: 'dddd.jpg'},
      { id: 3, name: 'sdfs df sdfsdf', plot: 'dfdfdfd.jpg'},
    ];
}])

/**
 * Movie detail controller
 */
.controller('MovieDetailCtrl', ['$routeParams',

  function ($routeParams) {
    console.log('movies details');
    console.log($routeParams.id);
}])

/**
 * New movie controller
 */
.controller('MovieNewCtrl', [

  function () {

}])

/**
 * Edit movie controller
 */
.controller('MovieEditCtrl', ['$routeParams',

  function ($routeParams) {
    console.log($routeParams.id);
}])