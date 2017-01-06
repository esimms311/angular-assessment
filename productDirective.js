angular.module('assessment')
    .directive('productDirective', function() {

        return {
            templateUrl: './views/product-tmpl.html',
            scope: {
                product: '=prod'
            },
            controller: function($scope) {
                $scope.toggleImage = function(product) {
                    product.showImage = !product.showImage;
                }
            }
        }
    });
