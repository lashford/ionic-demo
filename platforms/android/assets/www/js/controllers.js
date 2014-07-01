angular.module('drinksFinder.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('VenuesCtrl', function ($scope, VenueService) {
        $scope.venues = VenueService.findVenues();
    })

    .controller('VenueDetailCtrl', function ($scope, $stateParams, $log, VenueService) {
        $log.info("VenueDetailCtrl constructor");
        $scope.venue = VenueService.findVenue($stateParams.venueId);
        $log.info($scope.venue);
        $scope.map = {
            center: {
                latitude: $scope.venue.loc.latitude,
                longitude: $scope.venue.loc.longitude
            },
            zoom: 18
        };

        $scope.map.marker =  {"latitude":$scope.venue.loc.latitude, "longitude":$scope.venue.loc.longitude};

    })

    .controller('AccountCtrl', function ($scope) {

    });
