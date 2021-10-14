$(document).ready(function(){
   // config map
let config = {
    minZoom: 7,
    maxZoom: 18,
    zoomControl: false, // zoom control off (sol tarafta + - butonunu iptal eder
    dragging: true // false yazılırsa, mouse ile tutup çekme iptal eder.
    attributionControl:true; // false yazılırsa, haritayı yukarı aşağı indirip yükseltme iptal eder. 
  };
  
  // magnification with which the map will start
  const zoom = 10;
  // co-ordinates
  const lat = 39.941974;
  const lng = 32.854371;
  
  // calling map
  
  const map = L.map('map', config).setView([lat, lng], zoom);
  //  method fitBounds sets a map view                 
  
   // Event Sample
   map.on('click' function(e){
      alert(e.latlng.toString())
   });
  
  
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
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
  }).addTo(map);
  
  // {a|b|c}.tile.opentopomap.org/{z}/{x}/{y}.png
  // https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png
  // https://tile.opentopomap.org/{z}/{x}/{y}.png
  
  var baseLayers = {
    "Open Street Map": osm,
    "Open Topo Map"  : openTopo,
    "Google Sokak"   : googleStreets,
    "Google Hibrit"  : googleHybrid,
    "Google Uydu"    : googleSat
  };
  
   var topluKatman = L.control.layers(baseLayers).addTo(map);
  
  // reactivate zoom at the desired location
  // [topleft, topright, bottomleft, bottomright]
  L.control.zoom({ position: "topright" }).addTo(map);
  
  // Sclae control
  L.control.scale('metric').addTo(map);
  
  
  
  
  // single point
  //L.marker([39.941974, 32.854371]).addTo(map)
  //    .bindPopup('<b>TESPİT DURUMU</b><br><br>Tespiti Yapılan : 230<br>Tespit Yapılacak : 200<br>İdari Yoldan Tescil : 29')
  //    .openPopup();
  
  // coordinate array with popup text
  /* let points = [
      [39.96974, 32.854371, "point 1"],
      [39.931974, 32.454371, "point 2"],
      [39.961974, 32.854371, "point 3"],
      [39.911974, 32.254371, "point 4"],
   ];
   */
  
  // loop that adds many markers to the map
  /* for (let i = 0; i < points.length; i++) {
        const [lat, lng, popupText] = points[i];
        marker = new L.marker([lat, lng]).bindPopup(popupText).openPopup().addTo(map);
  }
  */
  
  /*
  let points = [
    ["Program","Akyurt","Ahmet Adil","20 Eylül - 20 Ekim",30,0,40.11467846572961,33.23448936169003],
    ["Program","Akyurt","Çam","20 Eylül - 20 Ekim",29,29,40.138222906247115,33.17026329614371],
    ["Program Dışı","Altındağ","Kavaklı","20 Eylül - 20 Ekim",45,40,40.0072035497873,33.04279069250751],
    ["Program Dışı","Altındağ","Aydıncık","20 Eylül - 20 Ekim",12,10,40.038399244170044,33.06638317260862],
    ["İdari Yoldan Tescil","Kalecik","Çandır","20 Eylül - 20 Ekim",40,40,40.260824057803084,33.467988059119065]
  ];
  */
  let points = [
          {
              tespitDurum: "Program",
              ilce: "Akyurt",
              mahalle: "Ahmet Adil",
              donem: "20 Eylül - 20 Ekim",
              tasinmazSayisi: 30,
              tespitiYapilan: 0,
              enlem: 40.11467846572961,
              boylam: 33.23448936169003
          },
          {
              tespitDurum: "Program",
              ilce: "Akyurt",
              mahalle: "Çam",
              donem: "20 Eylül - 20 Ekim",
              tasinmazSayisi: 29,
              tespitiYapilan: 29,
              enlem: 40.138222906247115,
              boylam: 33.17026329614371
          },
          {
              tespitDurum: "Program Dışı",
              ilce: "Altındağ",
              mahalle: "Kavaklı",
              donem: "20 Eylül - 20 Ekim",
              tasinmazSayisi: 45,
              tespitiYapilan: 40,
              enlem: 40.0072035497873,
              boylam: 33.04279069250751
          },
          {
              tespitDurum: "Program Dışı",
              ilce: "Altındağ",
              mahalle: "Aydıncık",
              donem: "20 Eylül - 20 Ekim",
              tasinmazSayisi: 12,
              tespitiYapilan: 10,
              enlem: 40.038399244170044,
              boylam: 33.06638317260862
          },
          {
              tespitDurum: "İdari Yoldan Tescil",
              ilce: "Kalecik",
              mahalle: "Çandır",
              donem: "20 Eylül - 20 Ekim",
              tasinmazSayisi: 40,
              tespitiYapilan: 40,
              enlem: 40.260824057803084,
              boylam: 33.467988059119065
          }
      ];
      
  // loop that adds many markers to the map
for (let i = 0; i < points.length; i++) {
    const [tespitDurum, ilce, mahalle, donem, tasinmazSayisi, tespitiYapilan, enlem, boylam] = points[i];
    marker = new L.marker([enlem, boylam]).bindPopup(mahalle).openPopup().addTo(map);
  }
      
});

