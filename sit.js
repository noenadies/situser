
//3.377176, -73.495287


 config = {
    apiKey: "AIzaSyDOfLv_05Bt6C2JRnD3UhfH7c2LrY6NfbE",
    authDomain: "porbarfirebase.firebaseapp.com",
    databaseURL: "https://porbarfirebase.firebaseio.com",
    projectId: "porbarfirebase",
    storageBucket: "porbarfirebase.appspot.com",
    messagingSenderId: "393018993566"
  };
  firebase.initializeApp(config);



var general;

var nodeusersit="usertsit";

//traerdef(nodeusersit);






function traerdef(stnode){ 
  firebase.database().ref().child(String(stnode)).
  once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) 
    || 'Anonymous';  general=snapshot.val();//generalkey=snapshot.key;
  });

}
//4.646993, -74.153212
var varemail="";
var varpass="";
var miname="";
var varcarlat=0;
var varcarlng=0;

var lemail="";
var lpass="";

//setTimeout(login, 2000);
function getidvalor(stl){
return document.getElementById(String(stl)).value;

}

function escribep(latcar,lngcar){
    var d = new Date();
document.getElementById("idp").innerHTML = "lat car: "+latcar +" "+" lng car: "+lngcar +" Colombia "+d ;

}
function login(){
console.log(general); 
traerdef(nodeusersit);
lemail=getidvalor("idemail");
lpass=getidvalor("idpass");
for(var i in general){
    if(general[i].email==lemail&&general[i].pass==lpass){
    
varcarlat=parseFloat(general[i].lat);
varcarlng=parseFloat(general[i].lng);

  document.getElementById("idlog").style.display = "none";
  document.getElementById("map").style.display = "flex";
  document.getElementById("idp").style.display = "flex";
//varcarlat=4.646993;
//varcarlng=-74.153212;
mimapa(varcarlng,varcarlat);
escribep(varcarlat,varcarlng);
}
    else{
        //alert("pas o email erroneo");
    }
}


}




function mimapa(lg,lt){



     var map;
    var milat=lt;//4.052760;
    var milng=lg;//-75.997735;
    var miponilatlng=[milng,milat];
      require([
        "esri/map", "esri/geometry/Circle", "esri/symbols/SimpleFillSymbol", 
        "esri/graphic", "esri/layers/GraphicsLayer",
        "dojo/dom", "dojo/dom-attr", "dojo/domReady!"
      ], function(
        Map, Circle, SimpleFillSymbol, 
        Graphic, GraphicsLayer, 
        dom, domAttr
      ) {
        map = new Map("map", {
          basemap: "streets",
          center: miponilatlng,
          slider: false,
          zoom:17
        });//[-75.997735,4.052760]
        var symbol = new SimpleFillSymbol().setColor(null).outline.setColor("blue");
        var gl = new GraphicsLayer({ id: "circles" });
        var geodesic = dom.byId("geodesic");
        map.addLayer(gl);
        map.on("click", function(e) {
          /*var radius = 60;
          var circle = new Circle({
            center: [-74.1542703,4.6474866],
            geodesic: domAttr.get(geodesic, "checked"),
            radius: radius
          });
          var graphic = new Graphic(circle, symbol);
          gl.add(graphic);*/
        });
      function hacermarcas (){
var radius = 60;
          var circle = new Circle({
            center: miponilatlng,
            geodesic: domAttr.get(geodesic, "checked"),
            radius: radius
          });
          var graphic = new Graphic(circle, symbol);
          gl.add(graphic);


      }//hacermarcas ();
      setTimeout(hacermarcas, 2000); });


    
}
