import { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapa.css";

import coordenadas from "./coordenadas";
const Mapa = () => {
    const hostUrl = import.meta.env.VITE_BACKEND_URL;
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(`${hostUrl}/api/metrics`, {
                method: "GET",
            });
            if (response.ok) {
                let datos = await response.json();
                setData(datos);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div>
                <h1>ESTO ES UN MAPA</h1>
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
                        <Marker key={index} position={coordenada.coord}>
                            <Popup>
                                {coordenada.name}
                                {data.map((item) => {
                                    {
                                        console.log("location", item.location);
                                        console.log(
                                            "coordenada",
                                            coordenada.coord
                                        );
                                    }
                                    if (
                                        item.location[0] ==
                                            coordenada.coord[0] &&
                                        item.location[1] == coordenada.coord[1]
                                    ) {
                                        {
                                            console.log("TRUE");
                                        }
                                        return (
                                            <div key={item.id}>
                                                {" "}
                                                {/* Remember to add a unique key to each mapped element */}
                                                <p>pH: {item.properties.pH}</p>
                                                <p>
                                                    Temperatura:{" "}
                                                    {
                                                        item.properties
                                                            .Temperatura
                                                    }
                                                </p>
                                                <p>
                                                    Conductividad:{" "}
                                                    {
                                                        item.properties
                                                            .Conductividad
                                                    }
                                                </p>
                                                <p>
                                                    Oxigeno:{" "}
                                                    {item.properties.Oxigeno}
                                                </p>
                                                {item.prediction === 1 ? (
                                                    <p>El baño es seguro</p>
                                                ) : (
                                                    <p>El baño no es seguro</p>
                                                )}
                                            </div>
                                        );
                                    }
                                    return null; // Make sure to return null for non-matching items to avoid rendering issues
                                })}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    );
};

export default Mapa;
