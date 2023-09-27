import { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapa.css";

import coordenadas from "./coordenadas";
const MapaRegister = () => {
    const hostUrl = import.meta.env.VITE_BACKEND_URL;
    const [selected, setSelected] = useState("");

    useEffect(() => {
        // console.log(selected);
    }, [selected]);
    return (
        <>
            <div>
                <MapContainer
                    center={[43.294125, -2.974312]}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {coordenadas.map((coordenada, index) => (
                        <Marker
                            key={index}
                            position={coordenada.coord}
                            eventHandlers={{
                                click: () => {
                                    setSelected(coordenada.name);
                                },
                            }}
                        >
                            <Popup>{coordenada.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    );
};

export default MapaRegister;
