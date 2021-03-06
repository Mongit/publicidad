(function() {
    var app = angular.module('app');
    
    app.factory('proxyFactory', ['$http', '$log', function($http, $log) {
        
        var Proxy = function(url) {
            this.url = url;
        };

        Proxy.prototype.error = function(data, status, headers, config){
            $log.error('%s %s %s', config.method, config.url, status);
        };

        //paginasWeb        
        Proxy.prototype.getAll = function(success) {
            var that = this;
            $http({
                method: 'GET',
                url: that.url
            }).success(success).error(that.error);
        };
        
        Proxy.prototype.getByUniqueName = function(name, success) {
            var that = this;
            var completeUrl = that.url + 'pages/' + name;
            $http({
                method: 'GET',
                url: completeUrl
            }).success(success).error(that.error);    
        };
        
        Proxy.prototype.getOne = function(id, success) {
            var that = this;
            $http({
                method: "GET",
                url: that.url + id
            }).success(success).error(that.error);
        };
        
        //admins
        Proxy.prototype.save = function(model, success) {
            var that = this;
            $http({
                method: 'POST',
                url: that.url,
                data: model
            }).success(success).error(that.error);
        };
        
        Proxy.prototype.update = function(id, model, success) {
            var that = this;
            $http({
                method: 'PUT',
                url: that.url + id,
                data: model
            }).success(success).error(that.error);
        };
        
        Proxy.prototype.delete = function(id, success) {
            var that = this;
            $http({
                method: "DELETE",
                url: that.url + id
            }).success(success).error(that.error);       
        };
        
        //guarda pagina con property _usuario
        Proxy.prototype.savePublico = function(id, model, success) {
            var that = this;
            $http({
                method: 'POST',
                url: that.url + id,
                data: model
            }).success(success).error(that.error);
        };        
        

        return function(url) {
            return new Proxy(url);
        };
    }]);
})();