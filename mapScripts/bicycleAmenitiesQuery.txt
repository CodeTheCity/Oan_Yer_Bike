/*
An Overpass turbo query, used for pulling bicycle amenities
in Aberdeen. Returns a JSON file that can be fed back into OpenStreetMaps.
Tags can be used to filter these points and display them in different ways.
*/
[out:json];
node
  [amenity=bicycle_repair_station]
  (57.05, -2.28, 57.23, -1.95);
out;
node
  [amenity=bicycle_parking]
  (57.05, -2.28, 57.23, -1.95);
out;
node
  [barrier=cycle_barrier]
  (57.05, -2.28, 57.23, -1.95);
out;
node
  [shop=bicycle_shop]
  (57.05, -2.28, 57.23, -1.95);
out;
  