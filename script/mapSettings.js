// config map
let config = {
  minZoom: 7,
  maxZomm: 18,
  zoomControl: false, // zoom control off
};

// magnification with which the map will start
const zoom = 10;
// co-ordinates
const lat = 39.941974;
const lng = 32.854371;

// calling map
const map = L.map('map', config).setView([lat, lng], zoom);
// method fitBounds sets a map view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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
// let points = [
// [39.96974, 32.854371, "point 1"],
// [39.931974, 32.454371, "point 2"],
// [39.961974, 32.854371, "point 3"],
// [39.911974, 32.254371, "point 4"],
// ];

let points = [
  ["Program","Akyurt","Ahmet Adil","20 Eylül - 20 Ekim",30,0,40.11467846572961,33.23448936169003],
  ["Program","Akyurt","Çam","20 Eylül - 20 Ekim",29,29,40.138222906247115,33.17026329614371],
  ["Program Dışı","Altındağ","Kavaklı","20 Eylül - 20 Ekim",45,40,40.0072035497873,33.04279069250751],
  ["Program Dışı","Altındağ","Aydıncık","20 Eylül - 20 Ekim",12,10,40.038399244170044,33.06638317260862],
  ["İdari Yoldan Tescil","Kalecik","Çandır","20 Eylül - 20 Ekim",40,40,40.260824057803084,33.467988059119065],
];
    
// loop that adds many markers to the map
for (let i = 0; i < points.length; i++) {
   // const [lat, lng, popupText] = points[i];
  const [tespitDurum, ilce, mahalle, donem, tasinmazSayisi, tespitiYapilan, enlem, boylam] = points[i];
  
  // marker = new L.marker([lat, lng]).bindPopup(popupText).openPopup().addTo(map);
  marker = new L.marker([enlem, boylam]).bindPopup(tasinmazSayisi).openPopup().addTo(map);
}
