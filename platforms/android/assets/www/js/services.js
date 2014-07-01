angular.module('drinksFinder.services', [])

/**
 * A simple Venue service that returns some mocked data.
 */
.factory('VenueService', function() {

  var mockedData = [
      {id: 0, name: 'Knot Bar', desc: 'awesome Continental Beers...', address:"374 Deansgate, Manchester M3 4LY", loc: { latitude: 53.474428, longitude: -2.252117}},
      {id: 1, name: 'Revolution Deansgate', desc: 'Vodka Vodka Vodka bar...', address:"Arch 7, Deansgate Lock, Whitworth Street, Manchester M1 5LH", loc: { latitude: 53.474613, longitude: -2.249655}}
  ];
  return {
      findVenues: function() {
          return mockedData;
      },
      findVenue: function(id) {
            return mockedData[id];
      }
  }

});
