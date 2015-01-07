function highlightName(name){
  return '<span class="higlight">'+name+'</span>';
}

function getResponse(name){
  $.ajax({
    url: 'http://bootcamp.aws.af.cm/welcome/'+name,
    dataType: 'json',
    success: function(data){
      if(data.response)
        $('.message').html(data.response.replace(name,highlightName(name)));
    },
    error: function(){
      $('.message').html('Error!!!').css('color','red');
    }
  });
}

$(document).ready(
  function(){
    $('.message').fadeIn(function(){
      $('.alias').focus();
    });

    $('#get-response').click(function(){
      $('.message').html('wait...');
      var name = $('#alias').val()
      getResponse(name);
    });
  }
)
