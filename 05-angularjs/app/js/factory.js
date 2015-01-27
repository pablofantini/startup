'use strict';

/**
 * Factories of application
 */
angular.module('app.factories', [])

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

.factory('MoviesFactory', ['DefaultDataService',
  function (DefaultDataService) {

    var movies;

    var factory = {};

    /**
     * Save current data into localStorage
     * @param {Type}
     */
    function persistData() {
      localStorage.setItem('movies-data', JSON.stringify(movies));
    }

    /**
     * Load data from localStorage
     * @param {Type}
     */
    function loadStoreData() {
      movies = JSON.parse(localStorage.getItem('movies-data'))
    }

    /**
     * check if exist data into localStorage
     * @param {Type}
     */
    function existLocalData() {
      return localStorage.getItem('movies-data') != undefined;
    }

    function generateUID() {
      return (new Date).getTime(); 
    }

    factory.getMovieList = function (callback) {
      if (!existLocalData()) {
        DefaultDataService.success(function (data) {
          movies = data;
          persistData();
          callback(movies);
        });
      } else {
        if (movies == null) {
          loadStoreData();
        }
        callback(movies);
      }
    };

    factory.getMovie = function (id) {
      return movies != null ? movies[id] : null;
    };

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