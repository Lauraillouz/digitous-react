import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  console.log("coord in Maps", props.coord.lon, props.coord.lat);
  return (
    <div className="flex justifyCenter">
      <MapContainer
        center={(props.coord.lon, props.coord.lat)}
        zoom={13}
        scrollWheelZoom={false}
        width={200}
      >
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={(props.coord.lon, props.coord.lat)} />
      </MapContainer>
    </div>
  );
};

export default Map;
