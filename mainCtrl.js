angular.module('assessment')
    .controller('mainCtrl', function($scope, mainService, $stateParams) {


        mainService.getProducts()
            .then(function(data) {
                $scope.products = data.data;
                console.log($scope.products);
            }, function(err) {
                console.log('error getting products', err);
            });

    });
