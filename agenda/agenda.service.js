angular.module('app').service('AgendaSrv',function(){

  var appuntamenti =[{
    id:0,
    titolo: "Appuntamento con angular",
    data: new Date(),
    descrizione: "Oggi ci sarà da divertirsi.....evviva!",
    luogo: "Domus Stella Maris",
    priorita: "#FF0000"
  },
  {
    id:1,
    titolo: "Appuntamento estetista",
    data: new Date(2017,03,25,20,00),
    descrizione: "Sopracciglia + ceretta + massaggio",
    luogo: "Sun Island",
    priorita: "#00FF00"
  },
  {
    id:2,
    titolo: "Compleanno mamma",
    data: new Date(2017,04,12,09,00),
    descrizione: "Compleanno di mamma ricordarsi di fare gli auguri",
    luogo: "Casa",
    priorita: "#FF0000"
  }
];


  var getAppuntamenti = function(){
    return appuntamenti;
  }

  var deleteAppuntamenti = function(indice){
    appuntamenti.splice(indice,1);
  }

  var getAppuntamento = function(id){
    return appuntamenti.find(function(el){
      return el.id == id;
    })
  }

  var nuovoAppuntamento = function(nuovo){
    var nuovoOggetto = angular.copy(nuovo);
    var arrayId=[];
    appuntamenti.forEach(function(el){
      arrayId.push(el.id);
    })
    var id= Math.max(...arrayId);
    nuovoOggetto.id = ++id;
    appuntamenti.push(nuovoOggetto);
  }
  //
 var updateAppuntamento = function(app){
    var updateoggetto = angular.copy(app);
    var indice = appuntamenti.findIndex(function(el){
      return el.id == app.id;
    })
    appuntamenti.splice(indice,1,updateoggetto);
    }



  return{
    getAppuntamenti : getAppuntamenti,
    deleteAppuntamenti: deleteAppuntamenti,
    getAppuntamento: getAppuntamento,
    nuovoAppuntamento: nuovoAppuntamento,
    updateAppuntamento: updateAppuntamento
  }
})
