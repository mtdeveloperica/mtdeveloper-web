(function (angular) {
	'use strict';

	angular.module("mtdeveloper")
    .config(function($routeProvider) {
        $routeProvider
        .when("/",{
            templateUrl: "main/main.html",
            controller : "MainController"
        }).otherwise({redirectTo: "/"});
        .when("/equipo", {
        	templateUrl: "team/team.html",
        	controller: "TeamController"
        }).otherwise({redirectTo: "/equipo"});
    })
    
})(window.angular);