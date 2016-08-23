
var app = angular.module('app',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('/', {
                url: "/",
                templateUrl: './views/login.html',
                controller: 'loginCtrl'
            })
            .state('home', {
                url: "/home",
                templateUrl: './views/home.html',
                controller: 'homeCtrl'
            })
    })