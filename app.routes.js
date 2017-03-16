angular.module('app').config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.when("","/");
  $urlRouterProvider.otherwise("/");

  $stateProvider.state('/', {
    url:'/',
    templateUrl:'agenda/agenda.template.html',
    controller: 'AgendaCtrl',
    resolve:{
      appuntamenti: function(AgendaSrv){
           return AgendaSrv.getAppuntamenti();
           }
        }
  })
  .state('dettaglio', {
    url:'/dettaglio/:id',
    templateUrl:'agenda/dettaglio.template.html',
    controller: 'DettaglioCtrl',
    // resolve:{
    //   appuntamento: function(AgendaSrv,$stateParams){
    //        return AgendaSrv.getAppuntamenti($stateParams.id);
    //        }
    // }
  })
  .state('nuovo', {
    url:'/nuovo',
    templateUrl:'agenda/nuovo.template.html',
    controller:'NuovoCtrl'

  });
});
