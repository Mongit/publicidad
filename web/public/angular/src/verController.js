(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', '$routeParams', '$location', '$log', 'mapService', function($http, $route, $location, $log, mapService) {
        var ctrl = this;
        
        ctrl.empresaId= $route.id;

        var promise1 = function() {
            return $http({
                url: 'http://localhost:3000/empresas/api/' + ctrl.empresaId,
                method: "GET",
            }).success(function(data, status, headers, config){
                ctrl.nombre = data.nombre;
                ctrl.logotipo = data.logotipo;
                ctrl.foto = data.foto;
                ctrl.textoIntro = data.textoIntro;
                ctrl.lat = data.lat;
                ctrl.long = data.long;
                ctrl.descripcion = data.descripcion;
                ctrl.horario = data.horario;
                ctrl.encargado = data.encargado;
                ctrl.tel = data.tel;
                ctrl.face = data.face;
                ctrl.email = data.email;
                ctrl.productos = data.productos;
                ctrl.nota = data.nota;
                
                ctrl.numero = data.direccion.numero;
                ctrl.numeroInt = data.direccion.numeroInt;
                ctrl.calle = data.direccion.calle;
                ctrl.colonia = data.direccion.colonia;
                ctrl.cp = data.direccion.cp;
                ctrl.municipio = data.direccion.municipio;
                ctrl.estado = data.direccion.estado;
          
                ctrl.rubro = data.rubro.rubro;
                
                ctrl.noContrato = data.informacion.noContrato;
                ctrl.url = data.informacion.url;
                ctrl.cliente = data.informacion.cliente;
                ctrl.telCliente = data.informacion.telCliente;
                ctrl.correoCliente = data.informacion.correoCliente;
                ctrl.fechaContrato = data.informacion.fechaContrato;
                ctrl.fechaVencimiento = data.informacion.fechaVencimiento;
                ctrl.pago = data.informacion.pago;
                
                var latitud = parseFloat(ctrl.lat);
                var longitud = parseFloat(ctrl.long);
    
                var mapa = mapService();
                mapa.placeMarker(latitud,longitud);
                
            }).error(function(data, status, headers, config) {
                console.log("%s %s %s", data, status, config);    
            });
        };

        promise1();

    }]);
})();
