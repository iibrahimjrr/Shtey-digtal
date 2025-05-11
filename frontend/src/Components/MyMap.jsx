import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  const position = [26.8206, 30.8025]; // إحداثيات الموقع (قم بتغييرها حسب الحاجة)

  return (
    <MapContainer center={position} zoom={13} style={{ height: "350px", width: "100%", borderRadius: "10px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          📍 موقعك الحالي <br /> Chittagonj, Lakshmipur.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
