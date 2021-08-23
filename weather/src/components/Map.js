import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ coord }) => {
  console.log("coord in Maps", coord);
  return (
    <div className="flex justifyCenter">
      <MapContainer
        center={[coord]}
        zoom={13}
        scrollWheelZoom={false}
        width={200}
      >
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coord]} />
      </MapContainer>
    </div>
  );
};

export default Map;
