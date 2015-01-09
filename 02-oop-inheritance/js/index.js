'use strict';

var constants = {
  URL_SERVER_HELLOW_NAME: 'http://bootcamp.aws.af.cm/welcome/',
  LAST_FM_API_URL: 'http://ws.audioscrobbler.com/2.0/',
  LAST_FM_API_KEY: 'c94d30f973ac83c3c3214ef62472884c',
}



$(document).ready(function () {
  /**
   * Highlight text
   * @param {string} name string to highlight
   * @return {string} html whit highlight text
   */
  function highlightName(name) {
    return '<span class="higlight">' + name + '</span>';
  }
  
  /**
   * Format server infromation
   * @param {json} albumObj albun information object form server
   * @return {string} html from albun information
   */
  function makeAlbumShowData(albumObj) {
    var result =
      '<div class="album">' + albumObj.name + '</div>' +
      '<div class="artist">' + albumObj.artist + '</div>' +
      '<div class="link"><a target="_blank" href="' + albumObj.url + '">Show in last.fm</a></div>';

    if (albumObj.image.length > 0) {
      var firstImg = albumObj.image[0];
      result += '<div class="image"><img src="' + firstImg['#text'] + '"></div>';
    }
    return result;
  }

  /**
   * Show server text response
   * @param {string} name
   * @param {function} success calback funtion on success
   * @param {function} error calback funtion on error
   */
  function getResponse(name, success, error) {
    $.ajax({
      url: constants.URL_SERVER_HELLOW_NAME + name,
      dataType: 'json',
      success: function (data) {
        if (data.response) {
          success(data.response);
        } else {
          error();
        }
      },
      error: function () {
        error();
      }
    });
  }

  /**
   * Show album information form last.fm
   * @param {string} query albun to search
   * @param {function} success calback funtion on success
   * @param {function} error calback funtion on error
   */
  function showLastFmInfo(query, success, error) {
    $.ajax({
      url: constants.LAST_FM_API_URL,
      dataType: 'json',
      data: {
        format: 'json',
        method: 'album.search',
        album: query,
        api_key: constants.LAST_FM_API_KEY
      },
      success: function (data) {
        if (data.results) {
          if (data.results['opensearch:totalResults'] > 0) {
            success(data.results.albummatches);
          }else{
            error();
          }
        }else{
          error(); 
        }
      },
      error: function () {
        error(); 
      }
    });
  }
  
  /**
   * Show welcome message event
   */
  function showMessageEvent(){
    var name = $('#alias').val()
    var $container = $('.message');
    $container.html('wait...');
    
    getResponse(name, function (response) {
      $container.html(response.replace(name, highlightName(name)));
    }, function () {
      $container.html('Error!!!').css('color', 'red');
    });
  }
  
  /**
   * Search album event
   */
  function albunSearchEvent(){
    var $container = $('#search-result')
    $container.html('wait...');
    
    showLastFmInfo($('#query').val(), function(result){
      $container.html('');
      $.each(result.album, function (index, value) {
        $('#search-result').append($('<article>', {
          html: makeAlbumShowData(value)
        }))
      });
    },function(){
      $('#search-result').html('No results');
    });
  }


  /* START APPLICATION */
  
  $('.message').fadeIn(function () {
    $('.alias').focus();
  });

  // Button show welcome message action
  $('#get-response').click(function () {
    showMessageEvent();
  });
  
  // input event
  $('#alias').keypress(function(e) {
    if (e.keyCode === 13) {
      showMessageEvent();
    }
  });

  // Button show albums information action
  $('#search-album').click(function () {
    albunSearchEvent();
  });
  
  // input event
  $('#query').keypress(function(e) {
    if (e.keyCode === 13) {
      albunSearchEvent();
    }
  });
  
});