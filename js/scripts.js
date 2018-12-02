$(function(){

  console.log('Scripts loaded!');

  var censusKey = config.CENSUS_KEY;

  var boaaURL = 'https://api.census.gov/data/2010/sf1?get=P012B001&for=state:*&key=' + censusKey;
  var whiteURL = 'https://api.census.gov/data/2010/sf1?get=P012A001&for=state:*&key=' + censusKey;
  var query = '';
  var sum;
  var raceData;

  // CALL TO US CENSUS API FOR POPULATION COUNTS OF WHITE PEOPLE
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: raceData,
    url: whiteURL,
    success: function(raceData) {
      console.log("(From US Census API) 2010 per-state population of people who are white alone: " + raceData);
      sum = 0;
      for (var i = 1; i < raceData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
        sum += Number(raceData[i][0]);
      }
      console.log("(From US Census API) 2010 total population of people who are white alone: " + sum);
    },
    error: function(msg) {
      console.log('race data did not load!');
    },
    complete: function(msg) {
      console.log('AJAX request for population counts of white people completed!')
    }
  }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF WHITE PEOPLE

  // CALL TO US CENSUS API FOR POPULATION COUNTS OF BLACK OR AFRICAN AMERICAN PEOPLE
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: raceData,
    url: boaaURL,
    success: function(raceData) {
      console.log("(From US Census API) 2010 per-state population of people who are Black or African American alone: " + raceData);
      sum = 0;
      for (var i = 1; i < raceData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
        sum += Number(raceData[i][0]);
      }
      console.log("(From US Census API) 2010 total population of people who are Black or African American alone: " + sum);
    },
    error: function(msg) {
      console.log('race data did not load!');
    },
    complete: function(msg) {
      console.log('AJAX request for population counts of Black or African American people completed!')
    }
  }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF BLACK OR AFRICAN AMERICAN PEOPLE

});
