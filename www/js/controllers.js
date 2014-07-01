angular.module('ionic-demo.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('MenuCtrl', function ($scope, MenuService) {
        $scope.menu = MenuService.getMenu();
    });

