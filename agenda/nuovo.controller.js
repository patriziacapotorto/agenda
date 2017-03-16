angular.module('app').controller('NuovoCtrl',function($scope,$state,AgendaSrv){


$scope.salva = function(){
     AgendaSrv.nuovoAppuntamento($scope.appuntamento);
	 };
  //  console.log(appuntamenti);
 $scope.appuntamento = {};
 $scope.appuntamento.priorita = "#FF0000";
 $scope.appuntamento.data = new Date();
})
