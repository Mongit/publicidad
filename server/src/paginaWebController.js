module.exports = (function() {
    var EmpresasController = function(express, paginaWebApi, tokenMiddleware) {
        this.express = express.module;
        this.paginaWebApi = paginaWebApi;
        this.router = this.express.Router();
        
        var router = this.router;

        router.get('/', paginaWebApi.getAll.bind(paginaWebApi));
            
        router.get('/:id', paginaWebApi.getOne.bind(paginaWebApi));
        
        router.get('/pages/:uniquename/', paginaWebApi.getByUniqueName.bind(paginaWebApi));
        
        router.post('/:userId', paginaWebApi.save.bind(paginaWebApi));
        
        router.put('/:id', paginaWebApi.update.bind(paginaWebApi));
        
        router.delete('/:id', paginaWebApi.delete.bind(paginaWebApi));
        
        router.delete('/soloEmpresa/:id', paginaWebApi.deleteSoloEmpresa.bind(paginaWebApi));
    }
    
    return EmpresasController;

})();
