import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const RealtimeMap: React.FC = () => {
  const [data, setData] = useState<number>(0);

  // Simulate real-time data update every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = Math.random().toFixed(2) * 100;
      setData(newData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <Marker position={[51.5, -0.09]}>
        <Popup>Real-time data: {data}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default RealtimeMap;
