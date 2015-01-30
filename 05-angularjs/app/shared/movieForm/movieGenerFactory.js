'use strict';

/**
 * Factory of application
 */
angular.module('app.movie.gener.factory', [])

/**
 * Movies geners list
 */ 
.factory('MoviesGeners', [
  function () {
    return {
      get: function () {
        return [
          'Action',
          'Adventure',
          'Animation',
          'Biography',
          'Comedy',
          'Crime',
          'Documentary',
          'Drama',
          'Family',
          'Fantasy',
          'Film-Noir',
          'History',
          'Horror',
          'Music',
          'Musical',
          'Mystery',
          'Romance',
          'Sci-Fi',
          'Sport',
          'Thriller',
          'War',
          'Western'
        ];
      }
    }
  }
])

;