angular.module('app').filter('filtroPriorita',function(){

  return function(lista,colore){
    if (colore == "Tutte") {
      return lista;
    }
    return lista.filter(function(el){
       return el.priorita == colore;
    });

  }

});
