import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  console.log("coord in Maps", props.coord);
  return (
    <div className="flex justifyCenter">
      {props.coord ? (
        <MapContainer
          // PROBLÈME : la carte s'affiche mais ne s'update pas
          center={props.coord}
          zoom={13}
          scrollWheelZoom={true}
          width={200}
        >
          <TileLayer
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={props.coord} />
        </MapContainer>
      ) : null}
    </div>
  );
};

export default Map;
