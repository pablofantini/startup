'use strict';

/**
 * Movie List Services of application
 */
angular.module('app.movie.list.service', [])

/**
 * Load default movie data from json file
 */ 
.service('DefaultDataService', ['$http',
  function ($http) {
     return $http.get('app/assets/json/movies.json');
  }])

;