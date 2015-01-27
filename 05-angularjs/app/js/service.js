'use strict';

/**
 * Services of application
 */
angular.module('app.services', [])


.service('DefaultDataService', ['$http',
  function ($http) {
     return $http.get('app/json/movies.json');
  }])

;