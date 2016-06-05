(function (angular) {
    angular.module("mainView", []).controller("MainController", [
        "$scope",function ($scope) {
            console.log('asdsdasda');
            $scope.name = 'Jean';  
        }])
})(window.angular);