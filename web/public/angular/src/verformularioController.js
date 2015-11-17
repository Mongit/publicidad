(function() {
    var app = angular.module('app');
    
    app.controller('VerFormularioController', ['$http', '$location', function($http, $location) {
        var ctrl = this;
        
        ctrl.empresaId= "564b96f779dce61119628f12";
        ctrl.from =  undefined;
        ctrl.pass =  undefined;
        ctrl.subject = undefined;
        ctrl.text = undefined;
        ctrl.sendEmail = function(){
            $http({
                url: 'http://localhost:3000/correo',
                method: "POST",
                data: {from:ctrl.from,pass:ctrl.pass,subject:ctrl.subject,text:ctrl.text}
            }).success(function(data, status, headers, config){
                alert("se envió el correo");
            }).error(function(data, status, headers, config) {
                alert("hubo error al mandar el correo");    
            });
        };
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
                
                ctrl.initialize(latitud,longitud);
            }).error(function(data, status, headers, config) {
                console.log("%s %s %s", data, status, config);    
            });
        };

        promise1();

        ctrl.initialize = function (latitud, longitud){
            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var myMarkerPosition=new google.maps.LatLng(latitud,longitud);
            var map;
            var myCenter=new google.maps.LatLng(latitud,longitud);
            var mapOptions = {
                  center:myCenter,
                  zoom:13,
                  mapTypeId:google.maps.MapTypeId.ROADMAP
              };
            map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
            var marker = new google.maps.Marker({
                position: myMarkerPosition,
                map: map,
                icon: iconBase + 'schools_maps.png'
            });
        }

    }]);
})();
