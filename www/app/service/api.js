(function (angular) {
    'use strict';
    
    angular.module("api", []).factory("Api",Api)
    
    Api.$inject  = ["$http", "$q"];
    
    function Api($http, $q) {
        var BASE_URL = 'http://www.mocky.io/v2/5753e640120000641c4775f7';
        
        return {
          getTeamInfo : getTeamInfo  
        };
        
        function getTeamInfo() {
            return $http.get(BASE_URL);
        }
    }
    
})(window.angular);