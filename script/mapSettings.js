// config map
let config = {
  minZoom: 7,
  maxZoom: 18,
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
var openTopo = L.tileLayer('https://{a|b|c}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ',
    maxZoom: 16,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

// {a|b|c}.tile.opentopomap.org/{z}/{x}/{y}.png
// https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png

var baseLayers = {
  "Open Street Map": osm,
  "Open topo Map"  : openTopo,
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

// coordinate array with popup text
const pointsA = [
  [52.230020586193795, 21.01083755493164, "point A1"],
  [52.22924516170657, 21.011320352554325, "point A2"],
  [52.229511304688444, 21.01270973682404, "point A3"],
  [52.23040500771883, 21.012146472930908, "point A4"],
];

const pointsB = [
  [52.229314161892106, 21.012055277824405, "point B1"],
  [52.22950144756943, 21.01193726062775, "point B2"],
  [52.22966573260081, 21.011829972267154, "point B3"],
  [52.2298333027065, 21.011744141578678, "point B4"],
  [52.2299680154701, 21.01164758205414, "point B5"],
  [52.23012572745442, 21.011583209037784, "point B6"],
  [52.230276867580336, 21.01143836975098, "point B7"],
  [52.23046414919644, 21.011341810226444, "point B8"],
];

// Extended `LayerGroup` that makes it easy
// to do the same for all layers of its members
const pA = new L.FeatureGroup();
const pB = new L.FeatureGroup();
const allMarkers = new L.FeatureGroup();

// adding markers to the layer pointsA
for (let i = 0; i < pointsA.length; i++) {
  marker = L.marker([pointsA[i][0], pointsA[i][1]]);
  pA.addLayer(marker).bindPopup(pointsA[i][2]);
}
// adding markers to the layer pointsB
for (let i = 0; i < pointsB.length; i++) {
  marker = L.marker([pointsB[i][0], pointsB[i][1]]);
  pB.addLayer(marker).bindPopup(pointsB[i][2]);
}

// object with layers
const overlayMaps = {
  "point A": pA,
  "point B": pB,
};

// centering a group of markers
map.on("layeradd layerremove", function () {
  // Create new empty bounds
  let bounds = new L.LatLngBounds();
  // Iterate the map's layers
  map.eachLayer(function (layer) {
    // Check if layer is a featuregroup
    if (layer instanceof L.FeatureGroup) {
      // Extend bounds with group's bounds
      bounds.extend(layer.getBounds());
    }
  });

  // Check if bounds are valid (could be empty)
  if (bounds.isValid()) {
    // Valid, fit bounds
    map.flyToBounds(bounds);
  } else {
    // Invalid, fit world
    // map.fitWorld();
  }
});

L.Control.CustomButtons = L.Control.Layers.extend({
  onAdd: function () {
    this._initLayout();
    this._addMarker();
    this._removeMarker();
    this._update();
    return this._container;
  },
  _addMarker: function () {
    this.createButton("add", "add-button");
  },
  _removeMarker: function () {
    this.createButton("remove", "remove-button");
  },
  createButton: function (type, className) {
    const elements = this._container.getElementsByClassName(
      "leaflet-control-layers-list"
    );
    const button = L.DomUtil.create(
      "button",
      `btn-markers ${className}`,
      elements[0]
    );
    button.textContent = `${type} markers`;

    L.DomEvent.on(button, "click", function (e) {
      const checkbox = document.querySelectorAll(
        ".leaflet-control-layers-overlays input[type=checkbox]"
      );

      // Remove/add all layer from map when click on button
      [].slice.call(checkbox).map((el) => {
        el.checked = type === "add" ? false : true;
        el.click();
      });
    });
  },
});

new L.Control.CustomButtons(null, overlayMaps, { collapsed: false }).addTo(map);
