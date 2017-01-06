angular.module('assessment')
    .controller('detailCtrl', function($scope, mainService, $stateParams) {

        mainService.getProduct($stateParams.id)
            .then(function(data) {
                $scope.detail = data.data;
            }, function(err) {
                console.log('Error', err);
            });

    });
