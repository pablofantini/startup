'use strict';

var MovieObserver = function (observerName) {

  var name = observerName;

  /**
   * Print output into console
   * @param {String} msg
   */
  function outPut(msg) {
    console.log(name + ': ' + msg);
  }

  /* Public functions */

  /**
   * function call from subject observed
   * @param {String} context
   * @param {Movie} movie
   */
  this.update = function (contex, movie) {
    switch (contex) {
    case 'playing':
      outPut('Playing ' + movie.get('title') + '...');
      break;
    case 'stopped':
      outPut('Stopped ' + movie.get('title'));
      break;
    default:
      console.error('context undefined');
    }
  }


}