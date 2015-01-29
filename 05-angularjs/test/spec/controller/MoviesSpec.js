'use strict';

describe('Controller: MoviesCtrl', function() {
  
  beforeEach(module('app'));
  
  var $rootScope, $scope, $controller;

  beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('MoviesCtrl', {'$rootScope' : $rootScope, '$scope': $scope});
    }));
  

  it('vale por una descripcion', function () {
  

    console.log($rootScope);
    
    expect($rootScope.movies).toBe(undefined); 
  });
    
  
});