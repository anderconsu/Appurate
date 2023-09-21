import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css'

const Mapa = () => {
  return (
    <>
      <div>
        <h1>ESTO ES MI POLLA</h1>
        <MapContainer center={[43.294125, -2.974312]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[43.254192, -2.922170]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      </div>
    </>
  )
}

export default Mapa


