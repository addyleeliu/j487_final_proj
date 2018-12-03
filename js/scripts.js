$(function(){

  console.log('Scripts loaded!');

  var censusKey = config.CENSUS_KEY;

  var statePopURL = 'https://api.census.gov/data/2010/sf1?get=P0010001,NAME&for=state:*&key=' + censusKey;
  var whiteURL = 'https://api.census.gov/data/2010/sf1?get=P012A001&for=state:*&key=' + censusKey;
  var boaaURL = 'https://api.census.gov/data/2010/sf1?get=P012B001&for=state:*&key=' + censusKey;
  var asianURL = 'https://api.census.gov/data/2010/sf1?get=P012D001&for=state:*&key=' + censusKey;
  var aianURL = 'https://api.census.gov/data/2010/sf1?get=P012C001&for=state:*&key=' + censusKey;
  var nhpiURL = 'https://api.census.gov/data/2010/sf1?get=P012E001&for=state:*&key=' + censusKey;
  var otherRaceURL = 'https://api.census.gov/data/2010/sf1?get=P012F001&for=state:*&key=' + censusKey;
  var multiRaceURL = 'https://api.census.gov/data/2010/sf1?get=P012G001&for=state:*&key=' + censusKey;

  var censusData;
  var sum;
  var html = '';

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


  // MAP OF AMERICAN INDIAN AND ALASKA NATIVE POPULATION PERCENTAGES
  $.getJSON('js/2010_aian.json', function(data) {
    Highcharts.mapChart('2010aianChart', {
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
        series: [{
            animation: {
                duration: 1000
            },
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
  }); // END OF MAP OF AMERICAN INDIAN AND ALASKA NATIVE POPULATION PERCENTAGES

  // MAP OF ASIAN POPULATION PERCENTAGES
  $.getJSON('js/2010_asian.json', function(data) {
    Highcharts.mapChart('2010asianChart', {
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
        series: [{
            animation: {
                duration: 1000
            },
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
  }); // END OF MAP OF ASIAN POPULATION PERCENTAGES

  // MAP OF BLACK OR AFRICAN AMERICAN ALONE POPULATION PERCENTAGES
  $.getJSON('js/2010_boaa.json', function(data) {
    Highcharts.mapChart('2010boaaChart', {
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
        series: [{
            animation: {
                duration: 1000
            },
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
  }); // END OF MAP OF BLACK OR AFRICAN AMERICAN ALONE POPULATION PERCENTAGES

  // MAP OF MULTIRACIAL POPULATION PERCENTAGES
  $.getJSON('js/2010_multiRace.json', function(data) {
    Highcharts.mapChart('2010multiRaceChart', {
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
        series: [{
            animation: {
                duration: 1000
            },
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
  }); // END OF MAP OF MULTIRACIAL POPULATION PERCENTAGES

  // MAP OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE POPULATION PERCENTAGES
  $.getJSON('js/2010_nhpi.json', function(data) {
    Highcharts.mapChart('2010nhpiChart', {
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
        series: [{
            animation: {
                duration: 1000
            },
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
  }); // END OF MAP OF NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE POPULATION PERCENTAGES

  // MAP OF SOME OTHER RACE ALONE POPULATION PERCENTAGES
  $.getJSON('js/2010_otherRace.json', function(data) {
    Highcharts.mapChart('2010otherRaceChart', {
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
        series: [{
            animation: {
                duration: 1000
            },
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
  }); // END OF MAP OF SOME OTHER RACE ALONE POPULATION PERCENTAGES

  // MAP OF WHITE ALONE POPULATION PERCENTAGES
  $.getJSON('js/2010_white.json', function(data) {
    Highcharts.mapChart('2010whiteChart', {
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
        series: [{
            animation: {
                duration: 1000
            },
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
  }); // END OF MAP OF WHITE POPULATION PERCENTAGES

}); // END OF DOCUMENT READY

function changeRaceMap() {
    var selectedRace = document.getElementById("selectRace").value;
    if (selectedRace == "aian") {
      console.log("user wants to see the American Indian and Alaska Native Alone heat map");
    }
    else if (selectedRace == "asian") {
      console.log("user wants to see the Asian Alone heat map");
    }
    else if (selectedRace == "boaa") {
      console.log("user wants to see the Black or African American Alone heat map");
    }
    else if (selectedRace == "multiRace") {
      console.log("user wants to see the Multiracial heat map");
    }
    else if (selectedRace == "nhpi") {
      console.log("user wants to see the Native Hawaiian and Other Pacific Islander Alone heat map");
    }
    else if (selectedRace == "otherRace") {
      console.log("user wants to see the Some Other Race Alone heat map");
    }
    else if (selectedRace == "white") {
      console.log("user wants to see the White Alone heat map");
    }
}
