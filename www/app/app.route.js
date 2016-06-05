(function (angular) {
	'use strict';

	angular.module("mtdeveloper")
    .config(function($routeProvider) {
        $routeProvider
        .when("/",{
            templateUrl: "main/main.html",
            controller : "MainController"
        }).otherwise({redirectTo:"/main"});
    })
    
})(window.angular);