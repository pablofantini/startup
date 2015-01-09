'use strict';

// MIXIN Object
var Shared = function () {};
Shared.prototype = {

  /**
   * Shared movie
   * @param {String} friendName
   */ 
  share: function (friendName) {
    if(friendName){
      console.log('Sharing ' + this.get('title') + ' with ' + friendName);
    }else{
      console.log('No friend name provider'); 
    }
  },

  /**
   * Like movie
   */ 
  like: function () {
    console.log('You like '+ this.get('title'));
  }
};


