'use strict';

// Refactor code as Module

var Movie = (function () {
  /**
   * Atributes
   */
  var isPlay = false,
    attributes = {},
    observers = [];


  /* Public functions */
  return function () {
    /**
     * Get attribute
     * @param {String} attr
     */
    this.get = function (attr) {
      return attributes[attr];
    }

    /**
     * Set attribute
     * @param {String} attr
     * @param {Object} value
     */
    this.set = function (attr, value) {
      attributes[attr] = value;
    }

    /**
     * Play movie
     */
    this.play = function () {
      if (this.get('title')) {
        this.nofity('playing');
        isPlay = true;
      } else {
        console.error('Not config movie');
      }
    }

    /**
     * Stop movie
     */
    this.stop = function () {
      if (isPlay) {
        this.nofity('stopped');
        isPlay = false;
      } else {
        console.error('Not playing movie');
      }
    }

    /**
     * Add observer object
     * @param {MovieObserver} observer
     */
    this.addObserver = function (observer) {
      return observers.push(observer);
    }

    /**
     * Remove observer
     * @param {int} index
     */
    this.removeObserver = function (index) {
      observers.splice(index, 1);
    }

    /**
     * Notify observers
     * @param {String} context
     */
    this.nofity = function (context) {
      for (var i in observers) {
        observers[i].update(context, this);
      }
    }
  }
})();