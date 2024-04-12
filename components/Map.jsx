import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder';
import 'leaflet-routing-machine';
import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const map = L.map('map', {
      center: [0, 0],
      zoom: 2,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.Routing.control({
      waypoints: [
        L.latLng(0, 0),
        L.latLng(0, 0),
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" />;
};

export default Map;