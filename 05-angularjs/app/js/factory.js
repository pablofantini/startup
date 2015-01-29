'use strict';

/**
 * Factories of application
 */
angular.module('app.factories', [])

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

/**
 * Movie model
 */ 
.factory('MoviesFactory', ['$q', 'DefaultDataService',
  function ($q, DefaultDataService) {
    var factory = {},
        movies;

    /**
     * Save current data into localStorage
     */
    function persistData() {
      localStorage.setItem('movies-data', JSON.stringify(movies));
    }

    /**
     * Load data from localStorage
     */
    function loadStoreData() {
      movies = JSON.parse(localStorage.getItem('movies-data'))
    }

    /**
     * check if exist data into localStorage
     * @return {boolean}
     */
    function existLocalData() {
      return localStorage.getItem('movies-data') != undefined;
    }

    /**
     * Make basic UID
     * @return {number} UID 
     */ 
    function generateUID() {
      return (new Date).getTime(); 
    }

    /* PUBLIC */
    
    /**
     * Make and return movie list into callback
     * @param {function} callback
     */ 
    factory.getMovieList = function () {
      var deferred = $q.defer();
        
      if (!existLocalData()) {
        DefaultDataService.success(function (data) {
          movies = data;
          persistData();
          deferred.resolve(movies);
        });
      } else {
        if (movies == null) {
          loadStoreData();
        }
        deferred.resolve(movies);
      }
      
      return deferred.promise;
    };

    /**
     * Get movie by id
     * @param {number} id
     * @return {Object}
     */ 
    factory.getMovie = function (id) {
      return movies != null ? movies[id] : null;
    };

    /**
     * Save movie, if not have id is new movie and generate id
     * @param {Object} movie object
     */ 
    factory.saveMovie = function (movie) {
      if(!movie.id){
        movie.id = generateUID(); 
      }
      movies[movie.id] = movie;
      persistData();
    };
    
    factory.deleteMovie = function (id) {
      delete movies[id];
      persistData();
    }

    return factory;
  }
])

;