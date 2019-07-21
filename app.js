$(() => {
// let appId = '30effaa9e7fc52a8cf6c6665b1d4c130'
// const city = $(event.target).val();

$('button').on('click', (event)=> {
  event.preventDefault();
  const cityInput = $('input[type="text"]').val();
  console.log(cityInput);

  $.ajax({

      url:"http://api.openweathermap.org/data/2.5/weather?APPID=30effaa9e7fc52a8cf6c6665b1d4c130&q=" + cityInput + "&units=imperial",
      type: "GET",

    }).then(
      (data) => {
           console.log(data);
        switch (data.weather[0].main){
          case 'Snow':
            document.body.style.backgroundImage = 'url(images/snow.jpeg)';
            break;
          case 'Rain':
            document.body.style.backgroundImage = 'url(images/rain.jpeg)';
            break;
          case 'Mist':
            document.body.style.backgroundImage = 'url(images/misty.jpeg)';
            break;
          case 'Drizzle':
            document.body.style.backgroundImage = 'url(images/drizzle.jpeg)';
            break;
          case 'Storm':
            document.body.style.backgroundImage = 'url(images/storm.jpeg)';
            break;
          case 'Clouds':
            document.body.style.backgroundImage = 'url(images/cloudy.jpeg)';
            break;
          case 'Clear':
            document.body.style.backgroundImage = 'url(images/clear_sky.jpeg)';
            break;
        }

        var $weatherDescription = document.getElementById('weather_description');
        var $temperature = document.getElementById('temperature');
        var $humidity = document.getElementById('humidity');
        var $cityName = document.getElementById('cityNameText');
        var $weatherIcon = document.getElementById('icon');
        // console.log($weatherIcon);
        var $windSpeed = document.getElementById('wind');
        $cityName = $('<h1>').text(data.name);
        $('body').append($cityName)
        $weatherIcon.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
        // console.log($weatherIcon);
        $('body').append($weatherIcon);
        $weatherDescription = $('<h1>').text(data.weather[0].description);
        $('body').append($weatherDescription);
        $temperature = Math.floor(data.main.temp) + '°' + 'F';
        $('body').append($temperature);
        $windSpeed = $('<p>').text('Wind speed: ' + Math.floor(data.wind.speed) + 'mph');
        $('body').append($windSpeed);
        $humidity = 'Humidity levels: ' + Math.floor(data.main.humidity) + '%'
        $('body').append($humidity);
   });

});


});
