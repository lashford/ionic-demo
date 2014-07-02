angular.module('ionic-demo.services', [])

/**
 * A simple Menu service that returns some mocked data.
 */
.factory('MenuService', function() {

  var mockedData = [
      {id: 0, name: 'Fish & Chips', price: 8.99},
      {id: 0, name: 'Mushroom Risotto', price: 12.99}
  ];
  return {
      getMenu: function() {
          return mockedData;
      }
  }

});
