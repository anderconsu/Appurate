import { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapa.css";
import "./popup.scss";

import coordenadas from "./coordenadas";
const Mapa = () => {
    const hostUrl = import.meta.env.VITE_BACKEND_URL;
    const [data, setData] = useState([]);
    const [cleanData, setCleanData] = useState({});
    const [count, setCount] = useState(0);

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

    const getDataFromName = async () => {
        try {
            const datosLimpios = {};
            for (let i = 0; i < coordenadas.length; i++) {
                const response = await fetch(`${hostUrl}/api/namemetrics`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: coordenadas[i].name,
                    }),
                });
                if (response.status === 200) {
                    let datos = await response.json();
                    console.log("datos recibidos", datos);
                    datosLimpios[datos.name] = datos;
                } else {
                    console.log("not found");
                }
            }
            console.log("datos limpios", datosLimpios);
            setCleanData(datosLimpios);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        async function fetchData() {
            await getData();
            await getDataFromName();
        }

        fetchData();
    }, []);
    return (
        <>
            <div>
                <MapContainer
                    center={[43.28633115285832, -2.9494889117518963]}
                    zoom={12}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution="Gracias a todo el equipo de appúrate"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {coordenadas.map((coordenada, index) => (
                        <Marker key={index} position={coordenada.coord}>
                            <Popup>
                                <div className="mapPopup">
                                    {cleanData[coordenada.name] ? (
                                        <div className="results">
                                            <p className="locatioNname">
                                                {coordenada.name}
                                            </p>
                                            <div className="popupProperties">
                                                <p>
                                                    Oxígeno:{" "}
                                                    {
                                                        cleanData[
                                                            coordenada.name
                                                        ].properties.Oxigeno
                                                    }
                                                    {" mg/l"}
                                                </p>
                                                <p>
                                                    Conductividad:{" "}
                                                    {
                                                        cleanData[
                                                            coordenada.name
                                                        ].properties
                                                            .Conductividad
                                                    }
                                                    {" µS/cm"}
                                                </p>
                                                <p>
                                                    Temperatura:{" "}
                                                    {
                                                        cleanData[
                                                            coordenada.name
                                                        ].properties.Temperatura
                                                    }
                                                    {" °C"}
                                                </p>
                                                <p>
                                                    pH:{" "}
                                                    {
                                                        cleanData[
                                                            coordenada.name
                                                        ].properties.pH
                                                    }
                                                </p>
                                                {cleanData[coordenada.name]
                                                    .prediction === 1 ? (
                                                    <p className="yes">
                                                        Análisis preeliminar:
                                                        Apto para el baño
                                                    </p>
                                                ) : (
                                                    <p className="no">
                                                        Análisis preeliminar: No
                                                        apto para el baño
                                                    </p>
                                                )}
                                            </div>
                                            <div className="resultInstitution">
                                                <p>
                                                    Muestra tomada por :{" "}
                                                    {
                                                        cleanData[
                                                            coordenada.name
                                                        ].institution
                                                    }
                                                </p>
                                                <p>
                                                    Fecha:{" "}
                                                    {new Date(
                                                        cleanData[
                                                            coordenada.name
                                                        ].date
                                                    ).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>No se han encontrado datos</p>
                                    )}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    );
};

export default Mapa;
