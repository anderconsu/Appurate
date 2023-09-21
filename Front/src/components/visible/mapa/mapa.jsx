import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css'

import coordenadas from './coordenadas';
const Mapa = () => {
  return (
    <>
      <div>
        <h1>ESTO ES UN MAPA</h1>
        <MapContainer center={[43.294125, -2.974312]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {coordenadas.map((coordenada, index) => (
        <Marker key={index} position={coordenada.coord}>
          <Popup>
            {coordenada.name}
          </Popup>
        </Marker>
      ))}
    
  </MapContainer>
      </div>
    </>
  )
}

export default Mapa


