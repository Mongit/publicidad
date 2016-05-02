describe("nuevo controller", function(){
    var url = '/alumnos/api/';
    
    beforeEach(module('app')); 
    
    var $controller; 
    var $httpMock; 
    var route; 
    
    var $locationCaptured; 
    var mapa;
    var prod;
    var paginasProx;
    var usuariosProx;
    var link;
    
    beforeEach(function() {
      module(function ($provide) {//porque dice que google no existe
            $provide.value('$window', windowMock);
        });
    });

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('POST', url).respond(false);
    }));
    
    beforeEach(inject(function($routeParams,$location, mapFactory, productosFactory, paginasProxy, usuariosProxy,linkFactory) {
        route = $routeParams;
        $locationCaptured = $location;
        mapa = mapFactory;
        prod = productosFactory;
        paginasProx = paginasProxy;
        usuariosProxy = usuariosProxy;
        link = linkFactory;
    }));
<<<<<<< HEAD
        
=======
     function makeController() {    
        objectUnderTest = $controller('NuevoPublicoController', {
            $routeParams:route,
            $location: $locationCaptured, 
            mapFactory: mapa, 
            productosFactory: prod,
            paginasProxy: paginasProx,
            usuariosProxy: usuariosProx,
            linkFactory: link
        });
    }
    /*
>>>>>>> 1924ffbf0db1590b5d364965af3d10739f0cddae
    it('borrar maker', function() {
        var controller = $controller('NuevoPublicoController');
        spyOn(controller, "borrarMarker");
        controller.borrarMarker();
        expect(controller.borrarMarker).toHaveBeenCalled();        
    });
    
    it('quitar logo', function() {
        var controller = $controller('NuevoPublicoController');
        controller.logotipo = "jonas";
        controller.quitarLogo();
        expect(controller.logotipo).toBe(undefined);
    });
    it('quitar foto', function() {
        var controller = $controller('NuevoPublicoController');
        controller.foto = "jonas";
        controller.quitarFoto();
        expect(controller.foto).toBe(undefined);
    });
    it('agregar producto', function() {
        var controller = $controller('NuevoPublicoController');
        var productos = [{texto:"hola"}];
        var producto = 3;
        controller.productos= productos;
        controller.producto= producto;
        
        spyOn(controller, "agregarProducto").and.callThrough();
        spyOn(prod, "agregarProducto").and.returnValue(undefined);
       
        controller.agregarProducto();
        expect(controller.agregarProducto).toHaveBeenCalled();
        expect(controller.producto).toBe(undefined);
    });
    it('remover producto', function() {
        var controller = $controller('NuevoPublicoController');
        var productos = [{texto:"hola"}];
        var remover = 3;
        controller.productos= productos;
        controller.remover= remover;
        spyOn(controller, "removerProducto");
        controller.removerProducto();
        expect(controller.removerProducto).toHaveBeenCalled();
    });
    //este esta muy bien, se hace la llamada de verdad, entonces  la instancia que está dentro del metodo regresa un valor que se refleja en la instancia a probar. buscar la respuesta en spy.create.
    it('borrar productos', function() {
        var controller = $controller('NuevoPublicoController');
        var productos = [{texto:"hola"}];
        controller.productos= productos;
        spyOn(controller, "borrarProductos").and.callThrough();
        spyOn(prod, "borrarProductos").and.returnValue([]);
        controller.borrarProductos();
        expect(controller.borrarProductos).toHaveBeenCalled();
        expect(controller.productos).toEqual([]);
    });
/*   it('borrar links', function() {
        var controller = $controller('NuevoPublicoController');
        var link1 = "www.link.com";
        var link2 = "www.link2.com";
        var links = [link1];
        controller.links = links;
        controller.link = link2;
                  
        spyOn(controller, "agregarLink").and.callThrough();
        spyOn(link, "agregarLink").and.returnValue(true);

*/

    it("Agregar Links", function() {
        /*var controller = $controller('NuevoPublicoController');
        var links = [];
        var link = link;
        
        console.log("Ant");
        
        $controller('NuevoPublicoController');
        spyOn(controller, "agregarLink").and.callThrough();
        
        controller.agregarLink();
        
        console.log("Des"); 
        
        expect(controller.agregarLink).toHaveBeenCalled(); 
        */
        var controller = $controller('NuevoPublicoController');
        //var links = [];
        //controller.link = link;
        var link1 = "www.link.com";
        var link2 = "www.link2.com";
        var links = [link1];
        controller.links = links;
        controller.link = "www.link2.com";//link2;
        console.log("Ant");
        
        $controller('NuevoPublicoController');
        spyOn(controller, "agregarLink").and.callThrough();
        spyOn(link, "agregarLink").and.returnValue(true);
        
        controller.agregarLink();
        
        console.log("Des " + link.agregarLink); 
        
        expect(controller.agregarLink).toHaveBeenCalled(); 
        expected(link.agregarLink).toHaveBeenCalledWith(links, controller.link);
        
    });
    
/*    it('changes location on Save', function() {
        var controller = $controller('NuevoController');
        
        controller.guardar();
        
        $httpMock.expectPOST(url);
        $httpMock.flush();
        
        expect($locationCaptured.path()).toBe('/');
    });
    */
});


