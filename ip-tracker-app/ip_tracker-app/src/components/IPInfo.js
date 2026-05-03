import React from 'react';
import './IPInfo.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const IPInfo = ({ data }) => {
  const hasValidCoords = Number.isFinite(data.lat) && Number.isFinite(data.lon);

  return (
    <div className="ip-info">
      <h2>Details for IP: {data.query}</h2>
      <p><strong>Location:</strong> {data.city}, {data.regionName}, {data.country}</p>
      <p><strong>Timezone:</strong> {data.timezone}</p>
      <p><strong>ISP:</strong> {data.isp}</p>

      {hasValidCoords ? (
        <div className="map-container">
          <MapContainer
            center={[data.lat, data.lon]}
            zoom={13}
            key={`${data.lat}-${data.lon}`} // force rerender on change
            scrollWheelZoom={false}
            style={{ height: '300px', width: '100%', marginTop: '1rem' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; 
            <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' />
            <Marker position={[data.lat, data.lon]}>
              <Popup>
                {data.city}, {data.regionName}, {data.country}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <p style={{ color: 'red', marginTop: '1rem' }}>
          Location data not available for this IP.
        </p>
      )}
    </div>
  );
};

export default IPInfo;



