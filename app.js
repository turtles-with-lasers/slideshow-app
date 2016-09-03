
var app = angular.module('app',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('/', {
                url: "/",
                templateUrl: './views/login.html',
                controller: 'authCtrl'
            })
            .state('signup', {
                url: "/signup",
                templateUrl: './views/signup.html',
                controller: 'authCtrl'
            })
            .state('home', {
                url: "/home",
                templateUrl: './views/home.html',
                controller: 'homeCtrl'
            })
    })