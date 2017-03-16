angular.module('app').controller('AgendaCtrl',function($scope,$state,appuntamenti,AgendaSrv){

   $scope.appuntamenti = appuntamenti;

   $scope.elimina = function(indice){
     AgendaSrv.deleteAppuntamenti(indice);
   }


})
