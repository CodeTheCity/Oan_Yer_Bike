An Overpass turbo query, used for pulling bicycle amenities
in Aberdeen. Returns a JSON file that can be fed back into OpenStreetMaps.
Tags can be used to filter these points and display them in different ways.

This can be pasted into https://overpass-turbo.eu/ and the output placed in bicycleAmenities.geojson

URL for this query:
https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%3B%0Anode%0A%20%20%5Bamenity%3Dbicycle_repair_station%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dbicycle_parking%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B%0Anode%0A%20%20%5Bbarrier%3Dcycle_barrier%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B%0Anode%0A%20%20%5Bshop%3Dbicycle_shop%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B

A line of bash to get the data:
wget -O bicycleAmenities.geojson https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%3B%0Anode%0A%20%20%5Bamenity%3Dbicycle_repair_station%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B%0Anode%0A%20%20%5Bamenity%3Dbicycle_parking%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B%0Anode%0A%20%20%5Bbarrier%3Dcycle_barrier%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B%0Anode%0A%20%20%5Bshop%3Dbicycle_shop%5D%0A%20%20%2857.05%2C%20-2.28%2C%2057.23%2C%20-1.95%29%3B%0Aout%3B

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
  