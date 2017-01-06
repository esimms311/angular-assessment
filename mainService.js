angular.module('assessment').service('mainService', function($http) {

        return {
            getProducts: function() {
                return $http.get('http://practiceapi.devmounta.in/products');
            },
            getProduct: function(id) {
                return $http.get('http://practiceapi.devmounta.in/products/' + id)
            }
        }
    });
