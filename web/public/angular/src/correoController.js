(function() {
   //inject angular file upload directives and services.
    var app = angular.module('app');

    app.controller('CorreoController', ['$http', '$location', function($http, $location) {
        var ctrl = this;
        
        ctrl.from = undefined;
        ctrl.pass = undefined;
        ctrl.text = undefined;
        ctrl.subject = undefined;
        
        ctrl.sendEmail = function() {
            $http({
                url: 'http://localhost:3000/correo',
                method: "POST",
                data: ctrl
            }).success(function(data, status, headers, config){
                alert("se envió el correo");
            }).error(function(data, status, headers, config) {
                alert("hubo error al mandar el correo");    
            });
        };

    }]);
})();