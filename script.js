/****** API KEY: f462ebfd8a4c3783712546f3bca5bd3c ******/

//method for running js only when DOM is ready
$(document).ready(function () {
  //Query Selectors
  var usersQuery = $('.searchBar');
  var searchButton = $('.searchBtn');
  var currentDisplay = $('.currentWeather');
  var forecastDisplay = $('.forecast');

  //vars
  var lattitude;
  var longitude;

  //User's Searched City

  searchButton.on('click', function () {
    //prevents form from submitting upon click
    event.preventDefault();
    var usersInput = usersQuery.val();

    //function for retrieving user's desired cities forecast
    var weatherSearch = function (city) {
      // Current day forecast call
      $.ajax({
        url:
          'https://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&units=imperial&APPID=f462ebfd8a4c3783712546f3bca5bd3c',
        method: 'GET',
      }).then(function (response) {
        // console.log(response);
        lattitude = response.coord.lat;
        longitude = response.coord.lon;
        oneCall();
        // 1. push data to current day
        var placeAndTime = $('<p>').text(
          `${response.name} (${moment().subtract(10, 'days').calendar()})`
        );
        var temp = $('<p>').text('Temperature: ' + response.main.temp + ' °F');
        var humidity = $('<p>').text(
          'Humidity: ' + response.main.humidity + '%'
        );
        var windSpeed = $('<p>').text(
          'Wind Speed: ' + response.wind.speed + ' MPH'
        );

        currentDisplay.append(placeAndTime);
        currentDisplay.append(temp);
        currentDisplay.append(humidity);
        currentDisplay.append(windSpeed);

        /*TESTING*/
        // console.log(response);
      });

      // // 5-day forecast call
      // $.ajax({
      //   url:
      //     'https://api.openweathermap.org/data/2.5/forecast?q=' +
      //     city +
      //     '&units=imperial&APPID=f462ebfd8a4c3783712546f3bca5bd3c',
      //   method: 'GET',
      // }).then(function (response) {
      //   // 1. push data to five day
      //   /*TESTING*/
      //   console.log(response);
      //   // console.log(response.list[0].main.temp);
      // });
    };
    weatherSearch(usersInput);

    //all data call function
    var oneCall = function () {
      $.ajax({
        url:
          'https://api.openweathermap.org/data/2.5/onecall?lat=' +
          lattitude +
          '&lon=' +
          longitude +
          '&units=imperial&appid=f462ebfd8a4c3783712546f3bca5bd3c',
        method: 'GET',
      }).then(function (response) {
        console.log(response);

        var uv = $('<p>').text('UV Index: ' + response.daily[0].uvi);
        currentDisplay.append(uv);

        for (var i = 1; i < response.daily.length - 2; i++) {
          var day = moment.unix(response.daily[i].dt).format('Do');

          var timeAndPlace = $('<p>').text(
            `${response.name} (${moment().subtract(10, 'days').calendar()})`
          );
          var tempHigh = $('<p>').text(
            'High: ' + response.daily[i].temp.max + ' °F'
          );
          var tempLow = $('<p>').text(
            'High: ' + response.daily[i].temp.min + ' °F'
          );

          var humid = $('<p>').text(
            'Humidity: ' + response.daily[i].humidity + '%'
          );
          forecastDisplay.append(timeAndPlace);
          forecastDisplay.append(tempHigh);
          forecastDisplay.append(tempLow);
          forecastDisplay.append(humid);

          console.log(day);
        }
        // console.log(day);
        // 1. UV data

        // 2. Five day forecast

        /*TESTING*/
        // console.log(response);
        // console.log(response.list[0].main.temp);
      });
    };

    //  populate city searched
  });
});
