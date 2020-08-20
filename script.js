/****** API KEY: f462ebfd8a4c3783712546f3bca5bd3c ******/

//method for running js only when DOM is ready
$(document).ready(function () {
  var weatherSearch = function (city) {
    /* WRONG */
    $.ajax({
      url:
        'api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&APPID=f462ebfd8a4c3783712546f3bca5bd3c',
      method: 'GET',
    }).then(function (response) {
      console.log(response);
    });
  };
  weatherSearch('portland');
});
