import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

// Komponen untuk menambahkan rute
function Routing({ start, end }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      routeWhileDragging: true, // Memungkinkan pengeditan rute secara interaktif
      show: false,
    }).addTo(map);

    return () => map.removeControl(routingControl); // Hapus kontrol saat komponen di-unmount
  }, [map, start, end]);

  return null;
}

export default function MapPlace() {
  const position = [51.505, -0.09]; // Titik awal
  const target = [51.51, -0.1]; // Titik tujuan

  return (
    <>
      <div>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          {/* Tambahkan Tile Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Tambahkan Marker */}
          <Marker position={position}>
            <Popup>Starting Point</Popup>
          </Marker>
          <Marker position={target}>
            <Popup>Destination Point</Popup>
          </Marker>

          {/* Tambahkan Rute */}
          <Routing start={position} end={target} />
        </MapContainer>
      </div>
    </>
  );
}
