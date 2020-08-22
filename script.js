/****** API KEY: f462ebfd8a4c3783712546f3bca5bd3c ******/

//method for running js only when DOM is ready
$(document).ready(function () {
  //Query Selectors
  var usersQuery = $('.searchBar');
  var searchButton = $('.searchBtn');

  //User's Searched City

  searchButton.on('click', function () {
    //prevents form from submitting upon click
    event.preventDefault();
    var usersInput = usersQuery.val();

    //function for retrieving user's desired cities forecast
    var weatherSearch = function (city) {
      console.log(usersQuery.val());

      // Current day forecast call
      $.ajax({
        url:
          'https://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&units=imperial&APPID=f462ebfd8a4c3783712546f3bca5bd3c',
        method: 'GET',
      }).then(function (response) {
        // 1. push data to current day
        /*TESTING*/
        // console.log(response);
        // console.log(response.main.temp);
      });

      // 5-day forecast call
      $.ajax({
        url:
          'https://api.openweathermap.org/data/2.5/forecast?q=' +
          city +
          '&units=imperial&APPID=f462ebfd8a4c3783712546f3bca5bd3c',
        method: 'GET',
      }).then(function (response) {
        // 1. push data to five day
        /*TESTING*/
        // console.log(response);
        // console.log(response.list[0].main.temp);
      });
    };
    weatherSearch(usersInput);

    // 1. populate city searched

    /*TESTING*/
    // console.log('click');
  });
});
