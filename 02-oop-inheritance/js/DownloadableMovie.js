'use strict';

var DownloadableMovie = function () {

  Movie.call(this);

  /* Public functions */ 
  
  this.download = function () {
    console.log('download movie: ' + this.get('title'))
  }
}