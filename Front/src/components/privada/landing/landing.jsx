// import React from 'react'
import "./landing.scss";
import { useContext, useEffect } from "react";
import PageContext from "../../../context/pageContext";
import { useNavigate } from "react-router-dom";

import Menu from "../menu/menu";

// MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../visible/mapa/mapa.css";
import coordenadas from "../../visible/mapa/coordenadas.js";
const Landing = () => {
    const { page, setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const hostUrl = import.meta.env.VITE_BACKEND_URL;

    const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
        try {
            const auth = await fetch(`${hostUrl}/user/authCheck`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (auth.status === 200) {
                return true;
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
            setError("Error, inténtalo más tarde");
        }
    };

    useEffect(() => {
        try {
            checkAuth();
        } catch (error) {
            console.error("useEffect error", error);
            setError("Error, inténtalo más tarde");
        }
    }, []);

    useEffect(() => {
        setPage("landing");
    }, []);
    return (
        <main className="paginaLanding">
            <Menu />
            <div className="landingMain">
                <div className="landingBienvenides">
                    <div className="landingBody">
                        <h2 className="bienvenides">ONGI ETORRI GUZTIOI!</h2>
                        <br />
                        <p className="bienvenides2 p1">
                            Aquí encontrarás los pasos a seguir para usar
                            nuestra app de registro y análisis de calidad del
                            agua.
                        </p>
                    </div>
                    <div className="peli1Container">
                        <img
                            src="./static/landing/peli1.png"
                            alt="peli1"
                            className="peli1"
                        />
                    </div>
                </div>
                <div className="landingMapaContainer">
                    <MapContainer
                        center={[43.28633115285832, -2.9494889117518963]}
                        zoom={13}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution="appúrate"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {coordenadas.map((coordenada, index) => (
                            <Marker key={index} position={coordenada.coord}>
                                <Popup>{coordenada.name}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="landingExplicacion">
                    <div className="landingPrimero">
                        <div className="peli2Container">
                            <img
                                src="./static/landing/peli2.png"
                                alt="peli2"
                                className="peli2"
                            />
                        </div>
                        <div className="primero">
                            <h3>Lo primero</h3>
                            <p className="p2">
                                que debes hacer es tomar una muestra de agua en
                                una ubicación de tu interés dentro del mapa
                                interactivo que puedes encontrar en la parte de
                                arriba. Puedes usar un kit de prueba de calidad
                                del agua que te proporcionaremos o usar tu
                                propio método. Una vez que tengas la muestra,
                                debes introducir los datos relevantes en nuestra
                                plataforma web accediendo a la página “Registrar
                                info.” en el menú. Estos datos se almacenarán en
                                nuestra base de datos y podrás acceder a ellos
                                en cualquier momento. Pulsa el botón “Enviar”
                                para terminar el registro de la información.
                            </p>
                        </div>
                    </div>

                    <div className="landingSegundo">
                        <div className="segundo">
                            <h3>Lo segundo...</h3>
                            <p className="p2">
                                que debes hacer es visualizar y analizar los
                                datos que has introducido, para ello accede a la
                                página “Visualizar info.” en el menú. Nuestra
                                plataforma web te ofrece herramientas de
                                visualización que te permitirán ver los datos en
                                forma de gráficos o tablas. Estas herramientas
                                te ayudarán a identificar patrones o tendencias
                                en los datos y a comprender mejor la calidad del
                                agua en tu ciudad
                            </p>
                        </div>
                        <div className="peli3Container">
                            <img
                                src="./static/landing/peli3.png"
                                alt="peli3"
                                className="peli3"
                            />
                        </div>
                    </div>

                    <div className="landingTercero">
                        <div className="peli4Container">
                            <img
                                src="./static/landing/peli4.png"
                                alt="peli4"
                                className="peli4"
                            />
                        </div>
                        <div className="tercero">
                            <h3>Lo tercero...</h3>
                            <p className="p2">
                                que debes hacer es explorar los “Recursos
                                adicionales” que te ofrecemos. Nuestra
                                plataforma web te proporciona recursos
                                educativos, como vÍdeos, artículos y actividades
                                prácticas, que te permitirán aprender más sobre
                                la calidad del agua. Estos recursos te
                                explicarán los diferentes tipos de contaminantes
                                que se encuentran comúnmente en el agua y cómo
                                afectan la salud humana.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Landing;
