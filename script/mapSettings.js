// config map
let config = {
  minZoom: 7,
  maxZomm: 18,
  zoomControl: false, // zoom control off
};

// magnification with which the map will start
const zoom = 18;
// co-ordinates
const lat = 39.941974;
const lng = 32.854371;


// calling map
const map = L.map('map', config).setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// reactivate zoom at the desired location
// [topleft, topright, bottomleft, bottomright]
L.control.zoom({ position: "topright" }).addTo(map);

// Sclae control
L.control.scale(metric).addTo(map);

L.marker([39.941974, 32.854371]).addTo(map)
    .bindPopup('<b>TESPİT DURUMU</b><br><br>Tespiti Yapılan : 230<br>Tespit Yapılacak : 200<br>İdari Yoldan Tescil : 29')
    .openPopup();

// coordinate array with popup text
let points = [
  [39.96974, 32.854371, "point 1"],
  [39.931974, 32.454371, "point 2"],
  [39.961974, 32.854371, "point 3"],
  [39.911974, 32.254371, "point 4"],
];

// loop that adds many markers to the map
for (let i = 0; i < points.length; i++) {
  const [lat, lng, popupText] = points[i];

  marker1 = new L.marker([lat, lng]).bindPopup(popupText).addTo(map);
}
