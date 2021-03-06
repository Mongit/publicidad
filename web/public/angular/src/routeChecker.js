(function() {
    var app = angular.module('app');
    
    app.factory('routeChecker', ['$location',function($location) {
        var RouteChecker = function() {
            this.privatePages = ['/privado/todos', '/privado/nuevo', '/privado/editar', '/privado/ver'];
            this.url = "";
        };
        
        RouteChecker.prototype.isPrivate = function () {
            this.url = $location.path();
            
            for (i = 0; i < this.privatePages.length ; i++){
                var str = this.privatePages[i];
                if(this.url.indexOf(str) > -1)
                    return true;
            }
            return false;
        };
        RouteChecker.prototype.isActive = function (path) {
            return path === $location.path();
        };

        return function() {
            return new RouteChecker();
        };
        
    }]);
})();