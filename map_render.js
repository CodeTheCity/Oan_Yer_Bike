var map = L.map('map').setView([57.145428390778264,-2.0937312622943405], 13);
// icon definitions
var rackIcon = L.icon({
  iconUrl: 'icons/rack.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [16, 16]
});

var repairIcon = L.icon({
  iconUrl: 'icons/repair.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [16, 16]
});

var barrierIcon = L.icon({
  iconUrl: 'icons/barrier.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [16, 16]
});

function swapsies(n) {
  return [n[1], n[0]];
}

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("get", "mapScripts/bicycleAmenities.geojson", false)
xmlHttp.send(null);
data = JSON.parse(xmlHttp.responseText);
L.geoJSON(data, {
  pointToLayer: function (feature, coords) {
    if (feature.properties && feature.properties.amenity) {
      switch(feature.properties.amenity) {
        case "bicycle_parking":
          return L.marker(swapsies(feature.geometry.coordinates), {icon: rackIcon}).addTo(map);
        case "cycle_barrier":
          return L.marker(swapsies(feature.geometry.coordinates), {icon: barrierIcon}).addTo(map);
        case "bicycle_repair_station":
          return L.marker(swapsies(feature.geometry.coordinates), {icon: repairIcon}).addTo(map);
        default:
      }
    }
  }, 
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.amenity) {
      switch(feature.properties.amenity) {
        case "bicycle_parking":
          layer.bindPopup("Is covered: " + feature.properties.covered)
          break;
        case "cycle_barrier":
          layer.bindPopup("Wheelchair passable: " + feature.properties.wheelchair + " Details: " + feature.properties.description)
          break;
        case "bicycle_repair_station":
          layer.bindPopup("Colour: " + feature.properties.colour)
          break;
        default:
      }
    }
  }
}).addTo(map);