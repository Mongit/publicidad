(function() {
    var app = angular.module('app');
    arrDep = ['$location', 'mapFactory', 'productosFactory', 'uploadFilesFactory', 'empresasProxy']; 
    arrDep.push(function($location, mapFactory, productosFactory, uploadFilesFactory, empresasProxy) {
        
        var ctrl = this;
        ctrl.nombre = undefined;
        ctrl.colorBackground = undefined;
        ctrl.colorText = undefined;
        ctrl.logotipo = undefined;
        ctrl.foto = undefined;
        ctrl.textoIntro = undefined;
        ctrl.descripcion = undefined;
        ctrl.horario = undefined;
        ctrl.encargado = undefined;
        ctrl.tel = undefined;
        ctrl.face = undefined;
        ctrl.email = undefined;
        ctrl.productos = [];
        ctrl.nota = undefined;
        
        
        //Map Function
        var mapa = mapFactory();
        mapa.getEventListener();
        ctrl.borrarMarker = function () {
            mapa.borrarMarker();
        };
        
        ctrl.quitarLogo = function() {
            ctrl.logotipo = undefined;
        };
        ctrl.quitarFoto = function() {
            ctrl.foto = undefined;
        };
        
        var prod = productosFactory()
        ctrl.agregarProducto = function() {
            ctrl.producto = prod.agregarProducto(ctrl.productos, ctrl.producto);
        };
        ctrl.removerProducto = function() {
            ctrl.productos = prod.removerProducto(ctrl.productos, ctrl.remover);
        };        
        ctrl.borrarProductos = function() {
            ctrl.productos = prod.borrarProductos(ctrl.productos);
        };       
        
        //Server Call
        ctrl.save = function() {
            ctrl.lat = mapa.getLat();
            ctrl.long = mapa.getLong();
            empresasProxy.save(ctrl, function(data, status, headers, config){
                $location.path('/todos');
            });
        };  
    });
    app.controller('NuevoController', arrDep);
})();
