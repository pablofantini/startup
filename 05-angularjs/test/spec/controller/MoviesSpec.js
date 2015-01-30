'use strict';

describe('Controller: MoviesCtrl', function () {
  var $controller, MoviesFactory, createController, scope;

  beforeEach(function () {
    module('app');

    // When Angular Injects the MoviesFactory dependencies, 
    // it will use the implementation we provided above
    inject(function ($controller, $rootScope, _$http_, _MoviesFactory_) {
      scope = $rootScope.$new();
      MoviesFactory = _MoviesFactory_;
      createController = function (params) {
        return $controller("MoviesCtrl", {
          $scope: scope,
          $stateParams: params || {}
        });
      };
    });
  });

  it("Call factory to get movie list", function () {
    var movie = {
      "1": {
        "id": 1,
        "name": "Inception",
        "year": 2010,
        "gener": "Sci-Fi",
        "description": "....",
        "plot": "",
        "image": "",
        "ranking": 7,
        "director": {
          "firstName": "Christopher",
          "lastName": "Nolan"
        }
      }
    };
    // Jasmine spy over the Movies factory. 
    // Since we provided a fake response already we can just call through. 
    spyOn(MoviesFactory, 'getMovieList').and.callFake(function () {
      return {
        then: function (callback) {
          return callback(movie);
        }
      };
    });

    createController();
    // Since we setup a spy we can now expect that spied function to have been called
    expect(MoviesFactory.getMovieList).toHaveBeenCalled();
    
    // check movie callback
    espect(scope.movie).toBe(movie);
  });
});