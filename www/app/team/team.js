(function (angular) {
    angular.module("teamView", []).controller("TeamController", [
        "$scope", "Api", function ($scope, Api) {

            $scope.team = [];

            _init();
            
            function _init() {
                Api.getTeamInfo().then(function (team) {
                   $scope.team = team.data; 
                },function (error) {
                    
                });
            }
        }])
})(window.angular);