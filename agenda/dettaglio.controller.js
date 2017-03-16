angular.module('app').controller('DettaglioCtrl',function($scope,AgendaSrv,$state){


    $scope.appuntamento = AgendaSrv.getAppuntamento($state.params.id);

    $scope.modifica = function(){
    AgendaSrv.updateAppuntamento($scope.appuntamento);
  }
})
