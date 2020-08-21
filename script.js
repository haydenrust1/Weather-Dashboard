/****** API KEY: f462ebfd8a4c3783712546f3bca5bd3c ******/

//method for running js only when DOM is ready
$(document).ready(function () {
  var weatherSearch = function (city) {
    // 5-day forecast call
    $.ajax({
      url:
        'https://api.openweathermap.org/data/2.5/forecast?q=' +
        city +
        '&units=imperial&APPID=f462ebfd8a4c3783712546f3bca5bd3c',
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      console.log(response.list[0].main.temp);
    });
    // Current day forecast call
    $.ajax({
      url:
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=imperial&APPID=f462ebfd8a4c3783712546f3bca5bd3c',
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      console.log(response.main.temp);
    });
  };
  weatherSearch('Portland');
});
