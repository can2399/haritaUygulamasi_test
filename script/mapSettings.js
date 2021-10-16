var map;
var mrkCurrentLocation;
var popMinarEPakistan;
var ctlPan;
var ctlZoomSlider;
var ctlMousePosition;
var ctlMeasure;
var ctlEasyButton;
var ctlSidebar;
var ObjOverlays;
var lyrTrees;

$(document).ready(function(){
 
// config map
 
let config = {
    minZoom: 7,
    maxZoom: 18,
    zoomControl: false, // zoom control off (sol tarafta + - butonunu iptal eder
    dragging: true, // false yazılırsa, mouse ile tutup çekme iptal eder.
    attributionControl:true // false yazılırsa, haritayı yukarı aşağı indirip yükseltme iptal eder. 
  };
  
  // magnification with which the map will start
  const zoom = 10;
  // co-ordinates
  const lat = 39.941974;
  const lng = 32.854371;
  
  // calling map
  
  map = L.map('map', config).setView([lat, lng], zoom);
  //  method fitBounds sets a map view                 
  
  // leaflet provider sample
 var osm = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
 
 /*
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  */
 
  var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
      attribution: '&copy; ',
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
  });
  var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
      attribution: '&copy; ',
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
  });
  var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
      attribution: '&copy; ',
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
  });
  var openTopo = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ',
      maxZoom: 16,
      subdomains:['mt0','mt1','mt2','mt3']
  });
 var yandexMap = L.tileLayer('https://sat0{1-4}.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}', {
      attribution: '&copy; ',
      maxZoom: 16,
      subdomains:['mt0','mt1','mt2','mt3']
  });
  
  // {a|b|c}.tile.opentopomap.org/{z}/{x}/{y}.png
  // https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png
  // https://tile.opentopomap.org/{z}/{x}/{y}.png
  
  var baseLayers = {
    "Open Street Map": osm,
    "Open Topo Map"  : openTopo,
    "Google Sokak"   : googleStreets,
    "Google Hibrit"  : googleHybrid,
    "Google Uydu"    : googleSat,
    "Yandex"         : yandexMap
  };
 
 // var topluKatman = L.control.layers(baseLayers).addTo(map);
 
 lyrTrees = L.geoJSON.ajax('data/trees.geojson').addTo(map);
    lyrTrees.on('data:load', function () {
        map.fitBounds(lyrTrees.getBounds())
    })
 ObjOverlays ={
        "Trees": lyrTrees,
    }
 
  
 
    L.control.layers(baseLayers, ObjOverlays).addTo(map);
  
 // deefault zoom control 
  // reactivate zoom at the desired location
  // [topleft, topright, bottomleft, bottomright]
  // L.control.zoom({ position: "topright" }).addTo(map);
  
  // Sclae control
  L.control.scale('metric').addTo(map);
  
   /*
  // Event Örnekleri
  // event handler on left click - Sol tuşa basınca koordinat ve zoom bilgisi gelsin
       map.on('click' , function (e) {
           alert(e.latlng.toString());
           alert(myMap.getZoom());
       });
   
  // right click - sağ tuşa basınca nokta eklesin - noktaya tıklayınca koordinat bilgisi gelsin
        map.on('contextmenu', function (e) {
            L.marker(e.latlng).addTo(map).bindPopup(e.latlng.toString());
        })
  
  */
   
   // Locale - L tuşuna basınca konum a gider
   
    // call locate method
   
     

        map.on('keypress', function (e) {
            if (e.originalEvent.key = 'l'){
                map.locate();
            }
        });

        map.on('locationfound', function (e) {

            if(mrkCurrentLocation){

                mrkCurrentLocation.remove();
            }
            mrkCurrentLocation = L.circleMarker(e.latlng).addTo(map);
            map.setView(e.latlng, 14);

        });

        map.on('locationerror', function (e) {

            alert("location was not found");

        });
 
 
 // get user location on button click
    $('#get_user_location_id').click(function () {
        map.locate();
    })
  
 // get specific location
    $('#go_to_id').click(function () {
        map.setView([39.941974, 32.854371], 18);
        map.openPopup(popMinarEPakistan);
    })
 
 // get zoom level
    map.on('zoomend', function () {

        $("#zoom_level_id").html(map.getZoom());
    })

    // get map center
    map.on('moveend', function () {
        $('#map_center_id').html(lat_lng_to_string(map.getCenter()));
    })

    // get mouse location
    map.on('mousemove', function (e) {
        $('#mouse_location_id').html(lat_lng_to_string(e.latlng));
    })

     // custom functions
    function lat_lng_to_string(ll) {
        return "["+ll.lat.toFixed(5)+","+ll.lng.toFixed(5)+"]";
    }
 
   // popup for minar e pakistan
    popMinarEPakistan = L.popup();
    popMinarEPakistan.setLatLng([39.941974, 32.854371]);
    popMinarEPakistan.setContent("<h2> Minar e Pakistan </h2>" +
        "<img src='img/minar-e-pakistan.jpg' width='300px' />");
    
    // popMinarEPakistan.openOnmap);
 
 // Plugins 
  ctlPan = L.control.pan().addTo(map);
  ctlZoomSlider = L.control.zoomslider({position: 'topright'}).addTo(map);
 
  ctlMousePosition = L.control.mousePosition().addTo(map);
  ctlMeasure =L.control.polylineMeasure().addTo(map);
 
 

 
  ctlEasyButton = L.easyButton('fa-crosshairs', function () {
        map.locate();
    }).addTo(map);
 
 ctlSidebar = L.control.sidebar('side-bar').addTo(map);
    ctlEasyButton = L.easyButton('fa-exchange', function () {
        ctlSidebar.toggle();
    }).addTo(map);
 



    
 
});

