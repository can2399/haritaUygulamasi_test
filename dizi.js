var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


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

/*
      // loop that adds many markers to the map
for (let i = 0; i < points.length; i++) {
    const [tespitDurum, ilce, mahalle, donem, tasinmazSayisi, tespitiYapilan, enlem, boylam] = points[i];
    marker = new L.marker([enlem, boylam]).bindPopup(mahalle).openPopup().addTo(map);
  }

  for (let i = 0; i < points.length; i++) {
    const [tespitDurum, ilce, mahalle, donem, tasinmazSayisi, tespitiYapilan, enlem, boylam] = points[i];
    console.log(points[i]);
  }
*/
  var yenidizi = points.filter(dizi => dizi.tespitDurum=='Program');
  console.log(yenidizi);
  console.log(yenidizi[0]);
  
