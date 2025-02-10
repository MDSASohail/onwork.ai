import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

const Heatmap = () => {
  const mapRef = useRef(null);

  const points = [
    { lat: 28.7041, lng: 77.1025, weight: 1 },
    { lat: 19.076, lng: 72.8777, weight: 1 },
    { lat: 12.9716, lng: 77.5946, weight: 1 },
    { lat: 22.5726, lng: 88.3639, weight: 1 },
    { lat: 13.0827, lng: 80.2707, weight: 1 },
  ];

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      const heatmapData = points.map((point) => [point.lat, point.lng, point.weight]);
      L.heatLayer(heatmapData, { radius: 25, blur: 15 }).addTo(map);
    }
  }, []);

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px", width: "100%" }} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Heatmap;
