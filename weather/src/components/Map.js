import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  console.log("coord in Maps", props.coord);
  return (
    <div className="flex justifyCenter">
      <MapContainer
        // PROBLÈME : dans center il faut un tableau. Le tableau ne fonctionne que si le state est déjà établit et qu'on cherche une nouvelle ville. Mais si on refresh et qu'on recommence, les coordonnées sont undefined. Sans le tableau, la carte affiche un carré gris
        center={props.coord}
        zoom={13}
        scrollWheelZoom={false}
        width={200}
      >
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.coord} />
      </MapContainer>
    </div>
  );
};

export default Map;
