'use strict';

/**
 * Services of application
 */
angular.module('app.services', [])

/**
 * Load default movie data from json file
 */ 
.service('DefaultDataService', ['$http',
  function ($http) {
     return $http.get('app/json/movies.json');
  }])

;