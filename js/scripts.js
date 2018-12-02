$(function(){

  console.log('Scripts loaded!');

  var censusKey = config.CENSUS_KEY;

  var boaaURL = 'https://api.census.gov/data/2010/sf1?get=P012B001&for=state:*&key=' + censusKey;
  var whiteURL = 'https://api.census.gov/data/2010/sf1?get=P012A001&for=state:*&key=' + censusKey;
  var asianURL = 'https://api.census.gov/data/2010/sf1?get=P012D001&for=state:*&key=' + censusKey;
  var aianURL = 'https://api.census.gov/data/2010/sf1?get=P012C001&for=state:*&key=' + censusKey;
  var nhpiURL = 'https://api.census.gov/data/2010/sf1?get=P012E001&for=state:*&key=' + censusKey;
  var otherRaceURL = 'https://api.census.gov/data/2010/sf1?get=P012F001&for=state:*&key=' + censusKey;
  var multiRaceURL = 'https://api.census.gov/data/2010/sf1?get=P012G001&for=state:*&key=' + censusKey;
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

  // CALL TO US CENSUS API FOR POPULATION COUNTS OF ASIAN PEOPLE
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: raceData,
    url: asianURL,
    success: function(raceData) {
      console.log("(From US Census API) 2010 per-state population of people who are Asian alone: " + raceData);
      sum = 0;
      for (var i = 1; i < raceData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
        sum += Number(raceData[i][0]);
      }
      console.log("(From US Census API) 2010 total population of people who are Asian alone: " + sum);
    },
    error: function(msg) {
      console.log('race data did not load!');
    },
    complete: function(msg) {
      console.log('AJAX request for population counts of Asian people completed!')
    }
  }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF ASIAN PEOPLE

  // CALL TO US CENSUS API FOR POPULATION COUNTS OF AMERICAN INDIAN AND ALASKA NATIVE PEOPLE
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: raceData,
    url: aianURL,
    success: function(raceData) {
      console.log("(From US Census API) 2010 per-state population of people who are American Indian and Alaska Native alone: " + raceData);
      sum = 0;
      for (var i = 1; i < raceData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
        sum += Number(raceData[i][0]);
      }
      console.log("(From US Census API) 2010 total population of people who are American Indian and Alaska Native alone: " + sum);
    },
    error: function(msg) {
      console.log('race data did not load!');
    },
    complete: function(msg) {
      console.log('AJAX request for population counts of American Indian and Alaska Native people completed!')
    }
  }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF AMERICAN INDIAN AND ALASKA NATIVE PEOPLE

  // CALL TO US CENSUS API FOR POPULATION COUNTS OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER PEOPLE
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: raceData,
    url: nhpiURL,
    success: function(raceData) {
      console.log("(From US Census API) 2010 per-state population of people who are Native Hawaiian and Other Pacific Islander alone: " + raceData);
      sum = 0;
      for (var i = 1; i < raceData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
        sum += Number(raceData[i][0]);
      }
      console.log("(From US Census API) 2010 total population of people who are Native Hawaiian and Other Pacific Islander alone: " + sum);
    },
    error: function(msg) {
      console.log('race data did not load!');
    },
    complete: function(msg) {
      console.log('AJAX request for population counts of Native Hawaiian and Other Pacific Islander people completed!')
    }
  }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER PEOPLE

  // CALL TO US CENSUS API FOR POPULATION COUNTS OF PEOPLE OF SOME OTHER RACE
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: raceData,
    url: otherRaceURL,
    success: function(raceData) {
      console.log("(From US Census API) 2010 per-state population of people who are of some other race: " + raceData);
      sum = 0;
      for (var i = 1; i < raceData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
        sum += Number(raceData[i][0]);
      }
      console.log("(From US Census API) 2010 total population of people who are of some other race: " + sum);
    },
    error: function(msg) {
      console.log('race data did not load!');
    },
    complete: function(msg) {
      console.log('AJAX request for population counts of people of some other race completed!')
    }
  }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF PEOPLE OF SOME OTHER RACE

  // CALL TO US CENSUS API FOR POPULATION COUNTS OF PEOPLE OF TWO OR MORE RACES
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: raceData,
    url: multiRaceURL,
    success: function(raceData) {
      console.log("(From US Census API) 2010 per-state population of people of two or more races: " + raceData);
      sum = 0;
      for (var i = 1; i < raceData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
        sum += Number(raceData[i][0]);
      }
      console.log("(From US Census API) 2010 total population of people of two or more races: " + sum);
    },
    error: function(msg) {
      console.log('race data did not load!');
    },
    complete: function(msg) {
      console.log('AJAX request for population counts of people of two or more races completed!')
    }
  }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF PEOPLE OF TWO OR MORE RACES

});
