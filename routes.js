angular.module('assessment')

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        var baseUrl = './views/';

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: baseUrl+'home.html',
                controller: 'mainCtrl'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: baseUrl+'blog.html',
                controller: 'mainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: baseUrl+'about.html',
                controller: 'mainCtrl'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: baseUrl+'shop.html',
                controller: 'mainCtrl'
            })
            .state('details', {
                url: '/details/:id',
                templateUrl: baseUrl+'product-details.html',
                controller: 'detailCtrl'
            });
    });
