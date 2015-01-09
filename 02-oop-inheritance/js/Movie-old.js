'use strict';

// Old code

function Movie() {
  this.isPlay = false;
  this.attributes = {};
  this.observers = [];
}

/**
 * Get attribute
 * @param {String} attr
 */
Movie.prototype.get = function (attr) {
  return this.attributes[attr];
}

/**
 * Set attribute
 * @param {String} attr
 * @param {Object} value
 */
Movie.prototype.set = function (attr, value) {
  this.attributes[attr] = value;
}

/**
 * Play movie
 */
Movie.prototype.play = function () {
  if (this.get('title')) {
    this.nofity('playing');
    this.isPlay = true;
  } else {
    console.error('Not config movie');
  }
}

/**
 * Stop movie
 */
Movie.prototype.stop = function () {
  if (this.isPlay) {
    this.nofity('stopped');
    this.isPlay = false;
  } else {
    console.error('Not playing movie');
  }
}

/**
 * Add observer object
 * @param {MovieObserver} observer
 */
Movie.prototype.addObserver = function (observer) {
  return this.observers.push(observer);
}

/**
 * Remove observer
 * @param {int} index
 */
Movie.prototype.removeObserver = function (index) {
  this.observers.splice(index, 1);
}

/**
 * Notify observers
 * @param {String} context
 */
Movie.prototype.nofity = function (context) {
  for (var i in this.observers) {
    this.observers[i].update(context, this);
  }
}