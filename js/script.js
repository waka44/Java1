$(function(){
  $('#btn').on('click', function() {

    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
    }).fail(function (data) {
    });
  });
});