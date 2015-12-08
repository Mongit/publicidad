(function () {
    var app = angular.module('app', ['ngRoute', 'ngFileUpload', 'ngMessages']);
    
    app.config(["$routeProvider", "$httpProvider", function ($router, $httpProvider) {
        
        $httpProvider.interceptors.push('httpInterceptor');

        $router.when("/", { templateUrl: "angular/views/portada.html"})
        $router.when('/signin', { templateUrl: "angular/views/signin.html" })
        $router.when('/signup', { templateUrl: "angular/views/signup.html" })
        $router.when("/todos", { templateUrl: "angular/views/todos.html"})
        $router.when("/nuevo", 
                     { templateUrl: "angular/views/nuevo.html"})
        $router.when("/ver/:id", 
                     { templateUrl: "angular/views/ver.html"})
        $router.when("/todos", 
                     { templateUrl: "angular/views/todos.html"})
        $router.when('/editar/:id', 
                     { templateUrl: "angular/views/editar.html" })
        .otherwise({ redirectTo: "/" });
    }]);
    
})();