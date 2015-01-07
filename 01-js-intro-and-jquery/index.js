'use strict';

var LAST_FM_API_KEY = 'c94d30f973ac83c3c3214ef62472884c';

function highlightName(name) {
  return '<span class="higlight">' + name + '</span>';
}

function showResponse(name) {
  $.ajax({
    url: 'http://bootcamp.aws.af.cm/welcome/'+name,
    dataType: 'json',
    success: function(data) {
      if(data.response) {
        $('.message').html(data.response.replace(name,highlightName(name)));
      }
    },
    error: function() {
      $('.message').html('Error!!!').css('color','red');
    }
  });
}

$(document).ready(
  function() {
    $('.message').fadeIn(function(){
      $('.alias').focus();
    });

    $('#get-response').click(function(){
      $('.message').html('wait...');
      showResponse($('#alias').val());
    });
  
    $('#search-album').click(function(){
      $('#search-result').html('wait...');
      showLastFmInfo($('#query').val());
    });
  }
);


//-------
function showLastFmInfo(query) {
   $.ajax({
     url: 'http://ws.audioscrobbler.com/2.0/',
     dataType: 'json',
     data: {
       format: 'json',
       method: 'album.search',
       album: query,
       api_key: LAST_FM_API_KEY
     },
     success: function(data) {
       if(data.results){
         $('#search-result').html($('<ul>'));
         var $list = $('#search-result ul');
         var result = data.results.albummatches
         console.log(result);
         if(result){
           $.each(result.album, function( index, value ){
             $list.append($('<li>',{html: 'name: ' + value.name}))
           });
         }
         
       }
       
     },
     error: function() {}
  });
}

function makeAlbumShowData(albumObj){
  albumObj.artist;
  albumObj.name;
  albumObj.url;
  if(albumObj.image > 0){
    albumObj.image[0]; 
  }
}