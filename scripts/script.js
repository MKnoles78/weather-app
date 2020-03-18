var cityFormEl = document.getElementById("city-form");
// this element is used to house the city searches
var cityInputEl = document.getElementById("city-input");
// this element is the input field for the city search 
var citySearchEl = document.getElementById("city-search");
// this element is for the search button which pulls data from input field 




// this is an onclick moment
// on click should take in search string from input field 
$("#city-search").click(function(event) {
    event.preventDefault()
    var city = $("#city-input").val().trim();
    var tRow = $("<tr>")
    console.log(city);
    tRow.append(city);
    $("tbody").append(tRow)
  
// review activity 5 for logging weather details 
// on click should take in search string from input field 

    var APIKey = "&appid=f0a99970ea6087abea42e16178a65bb8";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + APIKey;
    var queryForecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city + APIKey;


  // open weather api, will need a var for queryURL + input + apikey
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Transfer content to HTML
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      
      
      // Convert the temp to fahrenheit
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2)); 

    });

    $.ajax({
        url: queryForecastURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
            console.log(response)
          // Transfer content to HTML
        //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        //   $(".wind").text("Wind Speed: " + response.wind.speed);
        //   $(".humidity").text("Humidity: " + response.main.humidity);
          
          
        //   // Convert the temp to fahrenheit
        //   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        //   $(".tempF").text("Temperature (F) " + tempF.toFixed(2)); 
    
        });

});



// city is displayed into weaher block listing the city as a header with a weather emoji
// below the city header will be the following criteria temperature, humidty, wind speed, and  UV index

// below that would be a five day forecast within blocks that are displayed
// searched city is stored to a list and kept in local storage
// review activity 3 for appending a row in a table for storing data