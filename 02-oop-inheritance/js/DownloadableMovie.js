'use strict';

var DownloadableMovie = (function () {

  /**
   * Constructor  
   */ 
  function DownloadableMovie() {
    Movie.call(this);
  }

  DownloadableMovie.prototype = new Movie();

  /* Public functions */
  
  DownloadableMovie.prototype.download = function () {
    console.log('download movie: ' + this.get('title'))
  }

  return DownloadableMovie;
})();