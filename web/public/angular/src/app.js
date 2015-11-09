(function () {
    var app = angular.module('app', ['ngRoute', 'ngFileUpload']);
    
    app.config(["$routeProvider", function ($router) {

        $router.when("/", { templateUrl: "angular/views/index.html"})
        $router.when("/imagen", { templateUrl: "angular/views/imagen.html"})
        $router.when("/correo", { templateUrl: "angular/views/correo.html"})
        $router.when("/verimagen", { templateUrl: "angular/views/verImagen.html"})
        $router.when("/myEmpresa", { templateUrl: "angular/views/empresa.html"})
        .otherwise({ redirectTo: "/" });
    }]);
    
})();