$(function(){

  console.log('Scripts loaded!');

  var censusKey = config.CENSUS_KEY;

  var sum;

  // START 2010 US CENSUS API
        var statePopURL = 'https://api.census.gov/data/2010/sf1?get=P0010001,NAME&for=state:*&key=' + censusKey;
        var whiteURL = 'https://api.census.gov/data/2010/sf1?get=P012A001&for=state:*&key=' + censusKey;
        var boaaURL = 'https://api.census.gov/data/2010/sf1?get=P012B001&for=state:*&key=' + censusKey;
        var asianURL = 'https://api.census.gov/data/2010/sf1?get=P012D001&for=state:*&key=' + censusKey;
        var aianURL = 'https://api.census.gov/data/2010/sf1?get=P012C001&for=state:*&key=' + censusKey;
        var nhpiURL = 'https://api.census.gov/data/2010/sf1?get=P012E001&for=state:*&key=' + censusKey;
        var otherRaceURL = 'https://api.census.gov/data/2010/sf1?get=P012F001&for=state:*&key=' + censusKey;
        var multiRaceURL = 'https://api.census.gov/data/2010/sf1?get=P012G001&for=state:*&key=' + censusKey;
        var censusData;

        // CALL TO US CENSUS API FOR POPULATION TOTAL OF EACH STATE
        $.ajax({
          type: 'GET',
          dataType: 'json',
          data: censusData,
          url: statePopURL,
          success: function(censusData) {
            console.log(censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
            }
            console.log("(From US Census API) 2010 total population: " + sum);
          },
          error: function(msg) {
            console.log('state population data did not load!');
          },
          complete: function(msg) {
            console.log('AJAX request for state population counts completed!')
          }
        }); // CLOSE CALL TO US CENSUS API FOR POPULATION TOTAL OF EACH STATE

        // CALL TO US CENSUS API FOR POPULATION COUNTS OF WHITE PEOPLE
        $.ajax({
          type: 'GET',
          dataType: 'json',
          data: censusData,
          url: whiteURL,
          success: function(censusData) {
            console.log("(From US Census API) 2010 per-state population of people who are white alone: " + censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
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
          data: censusData,
          url: boaaURL,
          success: function(censusData) {
            console.log("(From US Census API) 2010 per-state population of people who are Black or African American alone: " + censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
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
          data: censusData,
          url: asianURL,
          success: function(censusData) {
            console.log("(From US Census API) 2010 per-state population of people who are Asian alone: " + censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
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
          data: censusData,
          url: aianURL,
          success: function(censusData) {
            console.log("(From US Census API) 2010 per-state population of people who are American Indian and Alaska Native alone: " + censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
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
          data: censusData,
          url: nhpiURL,
          success: function(censusData) {
            console.log("(From US Census API) 2010 per-state population of people who are Native Hawaiian and Other Pacific Islander alone: " + censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
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
          data: censusData,
          url: otherRaceURL,
          success: function(censusData) {
            console.log("(From US Census API) 2010 per-state population of people who are of some other race: " + censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
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
          data: censusData,
          url: multiRaceURL,
          success: function(censusData) {
            console.log("(From US Census API) 2010 per-state population of people of two or more races: " + censusData);
            sum = 0;
            for (var i = 1; i < censusData.length-1; i++) { /* excludes first descriptive title array & Puerto Rico data */
              sum += Number(censusData[i][0]);
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
  // END 2010 US CENSUS API

  // START 2000 US CENSUS API
        var statePopURL2000 = 'https://api.census.gov/data/2000/sf1?get=P001001,NAME&for=state:*&key=' + censusKey;
        var whiteURL2000 = 'https://api.census.gov/data/2000/sf1?get=P003003&for=state:*&key=' + censusKey;
        var boaaURL2000 = 'https://api.census.gov/data/2000/sf1?get=P003004&for=state:*&key=' + censusKey;
        var asianURL2000 = 'https://api.census.gov/data/2000/sf1?get=P003006&for=state:*&key=' + censusKey;
        var aianURL2000 = 'https://api.census.gov/data/2000/sf1?get=P003005&for=state:*&key=' + censusKey;
        var nhpiURL2000 = 'https://api.census.gov/data/2000/sf1?get=P003007&for=state:*&key=' + censusKey;
        var otherRaceURL2000 = 'https://api.census.gov/data/2000/sf1?get=P003008&for=state:*&key=' + censusKey;
        var multiRaceURL2000 = 'https://api.census.gov/data/2000/sf1?get=P003009&for=state:*&key=' + censusKey;
        var censusData2000;

        // CALL TO US CENSUS API FOR POPULATION TOTAL OF EACH STATE
        $.ajax({
          type: 'GET',
          dataType: 'json',
          data: censusData2000,
          url: statePopURL2000,
          success: function(censusData2000) {
            console.log(censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population: " + sum);
          },
          error: function(msg) {
            console.log('2000 state population data did not load!');
          },
          complete: function(msg) {
            console.log('AJAX request for 2000 state population counts completed!')
          }
        }); // CLOSE CALL TO US CENSUS API FOR POPULATION TOTAL OF EACH STATE

        // CALL TO US CENSUS API FOR POPULATION COUNTS OF WHITE PEOPLE
        $.ajax({
          type: 'GET',
          dataType: 'json',
          data: censusData2000,
          url: whiteURL2000,
          success: function(censusData2000) {
            console.log("(From US Census API) 2000 per-state population of people who are white alone: " + censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population of people who are white alone: " + sum);
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
          data: censusData2000,
          url: boaaURL2000,
          success: function(censusData2000) {
            console.log("(From US Census API) 2000 per-state population of people who are Black or African American alone: " + censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population of people who are Black or African American alone: " + sum);
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
          data: censusData2000,
          url: asianURL2000,
          success: function(censusData2000) {
            console.log("(From US Census API) 2000 per-state population of people who are Asian alone: " + censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population of people who are Asian alone: " + sum);
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
          data: censusData2000,
          url: aianURL2000,
          success: function(censusData2000) {
            console.log("(From US Census API) 2000 per-state population of people who are American Indian and Alaska Native alone: " + censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population of people who are American Indian and Alaska Native alone: " + sum);
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
          data: censusData2000,
          url: nhpiURL2000,
          success: function(censusData2000) {
            console.log("(From US Census API) 2000 per-state population of people who are Native Hawaiian and Other Pacific Islander alone: " + censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population of people who are Native Hawaiian and Other Pacific Islander alone: " + sum);
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
          data: censusData2000,
          url: otherRaceURL2000,
          success: function(censusData2000) {
            console.log("(From US Census API) 2000 per-state population of people who are of some other race: " + censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population of people who are of some other race: " + sum);
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
          data: censusData2000,
          url: multiRaceURL2000,
          success: function(censusData2000) {
            console.log("(From US Census API) 2000 per-state population of people of two or more races: " + censusData2000);
            sum = 0;
            for (var i = 1; i < censusData2000.length; i++) { /* excludes first descriptive title array */
              sum += Number(censusData2000[i][0]);
            }
            console.log("(From US Census API) 2000 total population of people of two or more races: " + sum);
          },
          error: function(msg) {
            console.log('race data did not load!');
          },
          complete: function(msg) {
            console.log('AJAX request for population counts of people of two or more races completed!')
          }
        }); // CLOSE CALL TO US CENSUS API FOR POPULATION COUNTS OF PEOPLE OF TWO OR MORE RACES
  // END 2000 US CENSUS API

  makeAIANmap(); // ON INITIAL LOAD


  // START 2013 AMERICAN COMMUNITY SURVEY API
        var acsLanURL = 'https://api.census.gov/data/2013/language?get=EST,LAN&for=us&key=' + censusKey; // gets estimated # of speakers in the U.S. for all the languages in detailed language list
        var acsLan39URL = 'https://api.census.gov/data/2013/language?get=EST,LAN39&for=us&key=' + censusKey; // gets estimated # of speakers in the U.S. for all the languages in additional language list
        var acsData;

        // CALL TO 2013 ACS API (TEST)
        $.ajax({
          type: 'GET',
          dataType: 'json',
          data: acsData,
          url: acsTestURL,
          success: function(acsData) {
            console.log(acsData);
          },
          error: function(msg) {
            console.log('ACS data did not load!');
          },
          complete: function(msg) {
            console.log('AJAX request for ACS data completed!')
          }
        }); // CLOSE CALL TO 2013 ACS API (TEST)
  // END 2013 AMERICAN COMMUNITY SURVEY API

}); // END OF DOCUMENT READY

// START RACIAL HEAT MAP FUNCTIONS
        function changeRaceMap() {
            var selectedRace = document.getElementById("selectRace").value;
            if (selectedRace == "aian") {
              console.log("user wants to see the American Indian and Alaska Native Alone heat map");
              makeAIANmap();
            }
            else if (selectedRace == "asian") {
              console.log("user wants to see the Asian Alone heat map");
              makeAsianMap();
            }
            else if (selectedRace == "boaa") {
              console.log("user wants to see the Black or African American Alone heat map");
              makeBOAAmap();
            }
            else if (selectedRace == "multiRace") {
              console.log("user wants to see the Multiracial heat map");
              makeMultiRaceMap();
            }
            else if (selectedRace == "nhpi") {
              console.log("user wants to see the Native Hawaiian and Other Pacific Islander Alone heat map");
              makeNHPImap();
            }
            else if (selectedRace == "otherRace") {
              console.log("user wants to see the Some Other Race Alone heat map");
              makeOtherRaceMap();
            }
            else if (selectedRace == "white") {
              console.log("user wants to see the White Alone heat map");
              makeWhiteMap();
            }
        }

        function makeAIANmap() {
          // MAKE 2010 MAP OF AMERICAN INDIAN AND ALASKA NATIVE POPULATION PERCENTAGES
          $.getJSON('js/2010_aian.json', function(data) {
            Highcharts.mapChart('2010heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2010 Distribution of American Indian and Alaska Native Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2010 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2010.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2010 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as American Indian and Alaska Native alone'
                    }
                }]
            });
          }); // END OF MAKING 2010 MAP OF AMERICAN INDIAN AND ALASKA NATIVE POPULATION PERCENTAGES

          // MAKE 2000 MAP OF AMERICAN INDIAN AND ALASKA NATIVE POPULATION PERCENTAGES
          $.getJSON('js/2000_aian.json', function(data) {
            Highcharts.mapChart('2000heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2000 Distribution of American Indian and Alaska Native Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2000 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2000.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2000 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as American Indian and Alaska Native alone'
                    }
                }]
            });
          }); // END OF MAKING 2000 MAP OF AMERICAN INDIAN AND ALASKA NATIVE POPULATION PERCENTAGES
        }
        function makeAsianMap() {
          // MAKE 2010 MAP OF ASIAN POPULATION PERCENTAGES
          $.getJSON('js/2010_asian.json', function(data) {
            Highcharts.mapChart('2010heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2010 Distribution of Asian Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2010 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2010.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2010 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as Asian alone'
                    }
                }]
            });
          }); // END OF MAKING 2010 MAP OF ASIAN POPULATION PERCENTAGES

          // MAKE 2000 MAP OF ASIAN POPULATION PERCENTAGES
          $.getJSON('js/2000_asian.json', function(data) {
            Highcharts.mapChart('2000heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2000 Distribution of Asian Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2000 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2000.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2000 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as Asian alone'
                    }
                }]
            });
          }); // END OF MAKING 2000 MAP OF ASIAN POPULATION PERCENTAGES
        }
        function makeBOAAmap() {
          // MAKE 2010 MAP OF BLACK OR AFRICAN AMERICAN ALONE POPULATION PERCENTAGES
          $.getJSON('js/2010_boaa.json', function(data) {
            Highcharts.mapChart('2010heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2010 Distribution of Black or African American Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2010 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2010.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2010 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as Black or African American alone'
                    }
                }]
            });
          }); // END OF MAKING 2010 MAP OF BLACK OR AFRICAN AMERICAN ALONE POPULATION PERCENTAGES

          // MAKE 2000 MAP OF BLACK OR AFRICAN AMERICAN ALONE POPULATION PERCENTAGES
          $.getJSON('js/2000_boaa.json', function(data) {
            Highcharts.mapChart('2000heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2000 Distribution of Black or African American Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2000 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2000.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2000 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as Black or African American alone'
                    }
                }]
            });
          }); // END OF MAKING 2000 MAP OF BLACK OR AFRICAN AMERICAN ALONE POPULATION PERCENTAGES
        }
        function makeMultiRaceMap() {
          // MAKE 2010 MAP OF MULTIRACIAL POPULATION PERCENTAGES
          $.getJSON('js/2010_multiRace.json', function(data) {
            Highcharts.mapChart('2010heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2010 Distribution of Multiracial Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2010 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2010.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2010 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as two or more races'
                    }
                }]
            });
          }); // END OF MAKING 2010 MAP OF MULTIRACIAL POPULATION PERCENTAGES

          // MAKE 2000 MAP OF MULTIRACIAL POPULATION PERCENTAGES
          $.getJSON('js/2000_multiRace.json', function(data) {
            Highcharts.mapChart('2000heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2000 Distribution of Multiracial Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2000 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2000.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2000 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as two or more races'
                    }
                }]
            });
          }); // END OF MAKING 2000 MAP OF MULTIRACIAL POPULATION PERCENTAGES
        }
        function makeNHPImap() {
          // MAKE 2010 MAP OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE POPULATION PERCENTAGES
          $.getJSON('js/2010_nhpi.json', function(data) {
            Highcharts.mapChart('2010heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2010 Distribution of Native Hawaiian and Other Pacific Islander Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2010 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2010.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2010 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as Native Hawaiian and Other Pacific Islander alone'
                    }
                }]
            });
          }); // END OF MAKING 2010 MAP OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE POPULATION PERCENTAGES

          // MAKE 2000 MAP OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE POPULATION PERCENTAGES
          $.getJSON('js/2000_nhpi.json', function(data) {
            Highcharts.mapChart('2000heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2000 Distribution of Native Hawaiian and Other Pacific Islander Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2000 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2000.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2000 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as Native Hawaiian and Other Pacific Islander alone'
                    }
                }]
            });
          }); // END OF MAKING 2000 MAP OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE POPULATION PERCENTAGES
        }
        function makeOtherRaceMap() {
          // MAKE 2010 MAP OF SOME OTHER RACE ALONE POPULATION PERCENTAGES
          $.getJSON('js/2010_otherRace.json', function(data) {
            Highcharts.mapChart('2010heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2010 Distribution of Some Other Race Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2010 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2010.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2010 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as some other race alone'
                    }
                }]
            });
          }); // END OF MAKING 2010 MAP OF SOME OTHER RACE ALONE POPULATION PERCENTAGES

          // MAKE 2000 MAP OF SOME OTHER RACE ALONE POPULATION PERCENTAGES
          $.getJSON('js/2000_otherRace.json', function(data) {
            Highcharts.mapChart('2000heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2000 Distribution of Some Other Race Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2000 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2000.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2000 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as some other race alone'
                    }
                }]
            });
          }); // END OF MAKING 2000 MAP OF SOME OTHER RACE ALONE POPULATION PERCENTAGES
        }
        function makeWhiteMap() {
          // MAKE 2010 MAP OF WHITE ALONE POPULATION PERCENTAGES
          $.getJSON('js/2010_white.json', function(data) {
            Highcharts.mapChart('2010heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2010 Distribution of White Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2010 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2010.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2010 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as white alone'
                    }
                }]
            });
          }); // END OF MAKING 2010 MAP OF WHITE POPULATION PERCENTAGES

          // MAKE 2000 MAP OF WHITE ALONE POPULATION PERCENTAGES
          $.getJSON('js/2000_white.json', function(data) {
            Highcharts.mapChart('2000heatMapContainer', {
                chart: {
                    map: 'countries/us/us-all',
                    borderWidth: 0.8
                },
                title: {
                    margin: 35,
                    text: '2000 Distribution of White Alone Population'
                },
                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },
                mapNavigation: {
                    enabled: true
                },
                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.67, '#4444FF'],
                        [1, '#000022']
                    ]
                },
                credits: {
                    enabled: true,
                    text: 'Source: 2000 U.S. Census',
                    href: 'javascript:window.open("https://www.census.gov/data/developers/data-sets/decennial-census.2000.html", "_blank")'
                },
                series: [{
                    data: data,
                    joinBy: ['postal-code', 'ST'],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        format: '{point.ST}'
                    },
                    name: '2000 U.S. Census',
                    tooltip: {
                        pointFormat: '{point.value}% of people in {point.StateName} self-identified as white alone'
                    }
                }]
            });
          }); // END OF MAKING 2000 MAP OF WHITE POPULATION PERCENTAGES
        }
// END RACIAL HEAT MAP FUNCTIONS
