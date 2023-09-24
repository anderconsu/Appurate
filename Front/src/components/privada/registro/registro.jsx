import { useContext, useEffect, useState } from "react";
import "./registro.css";
import PageContext from "../../../context/pageContext";
import { useNavigate } from "react-router-dom";

// MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../visible/mapa/mapa.css";
import coordenadas from "../../visible/mapa/coordenadas.js";

const Registro = () => {
    const { page, setPage } = useContext(PageContext);
    const [location, setLocation] = useState([]);
    const [name, setName] = useState("");
    const [pH, setpH] = useState("");
    const [oxigeno, setOxigeno] = useState("");
    const [conductividad, setConductividad] = useState("");
    const [temperatura, setTemperatura] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");

    const hostUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

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
        setPage("registro");
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage("");

        const institution = localStorage.getItem("institution");
        const aula = localStorage.getItem("aula");
        if (!institution || !aula) {
            setError("Sesión expirada, por favor vuelva a iniciar sesión");
            return;
        }
        if (!location || !name) {
            setError(
                "Acuerdese de seleccionar una ubicación en el mapa antes de enviar el formulario."
            );
            return;
        }
        if (!pH || !oxigeno || !conductividad || !temperatura) {
            setError("Todos los campos son obligatorios");
            return;
        }
        if (!localStorage.getItem("token")) {
            setError("Sesión expirada, por favor vuelva a iniciar sesión");
            return;
        }
        try {
            const response = await fetch(`${hostUrl}/api/prediction`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    name,
                    location,
                    aula,
                    institution,
                    properties: {
                        pH: parseFloat(pH),
                        Oxigeno: parseFloat(oxigeno),
                        Conductividad: parseFloat(conductividad),
                        Temperatura: parseFloat(temperatura),
                    },
                }),
            });

            if (response.ok) {
                console.log("Datos de muestra enviados con éxito");
                setMessage("Los datos de la muestra han sido enviados");
                setLocation("");
                setpH("");
                setOxigeno("");
                setConductividad("");
                setTemperatura("");
            } else {
                let error = await response.json();
                console.error(error);
                if (response.status === 401) {
                    setError(
                        "Sesión expirada, por favor vuelva a iniciar sesión"
                    );
                }
                if (error.message == "invalid token") {
                    setError("Sesión no valida");
                } else {
                    setError("Error al enviar los datos de muestra");
                }
            }
        } catch (error) {
            console.error(error);
            setError("Error, inténtalo más tarde");
        }
        console.log("Datos de la muestra enviados:");
        console.log("Localización:", location);
        console.log("pH:", pH);
        console.log("Oxígeno (mg/l):", oxigeno);
        console.log("Conductividad:", conductividad);
        console.log("Temperatura:", temperatura);
    };

    return (
        <>
            <div className="registroGeneral">
                <h2>REGISTRA LOS DATOS DE LA MUESTRA</h2>
                <form onSubmit={handleSubmit} className="formularioMuestra">
                    {error && <p className="error-message">{error}</p>}

                    {/* localización */}

                    <div className="localizacion">
                        <div className="locationHeader">
                            <label htmlFor="01" className="uno">
                                01.
                            </label>
                            <label htmlFor="location">Localización: </label>

                            <div></div>
                        </div>

                        <div className="mapa">
                            <MapContainer
                                center={[43.294125, -2.974312]}
                                zoom={13}
                                scrollWheelZoom={true}
                            >
                                <TileLayer
                                    attribution="appúrate"
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {coordenadas.map((coordenada, index) => (
                                    <Marker
                                        key={index}
                                        position={coordenada.coord}
                                        eventHandlers={{
                                            click: () => {
                                                setName(coordenada.name);
                                                setLocation(coordenada.coord);
                                            },
                                        }}
                                    >
                                        <Popup>{coordenada.name}</Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>

                    <div className="muestras">
                        {/* oxígeno (mg/l) */}
                        <div className="oxigeno">
                            <label htmlFor="02" className="dos">
                                02.
                            </label>
                            <label htmlFor="oxigeno">Oxígeno (mg/l):</label>
                            <input
                                type="text"
                                step="0.01"
                                id="oxigeno"
                                name="oxigeno"
                                value={oxigeno}
                                min={0}
                                max={15}
                                onChange={(e) => setOxigeno(e.target.value)}
                                required
                            />
                        </div>

                        {/* conductividad */}
                        <div className="conductividad">
                            <label htmlFor="03" className="tres">
                                03.
                            </label>
                            <label htmlFor="conductividad">
                                Conductividad (µS/cm):
                            </label>
                            <input
                                type="text"
                                step="0.01"
                                id="conductividad"
                                name="conductividad"
                                value={conductividad}
                                min={0}
                                onChange={(e) =>
                                    setConductividad(e.target.value)
                                }
                                required
                            />
                        </div>

                        {/* temperatura */}
                        <div className="temperatura">
                            <label htmlFor="04" className="cuatro">
                                04.
                            </label>
                            <label htmlFor="temperatura">
                                Temperatura (°C):
                            </label>
                            <input
                                type="text"
                                step="0.01"
                                id="temperatura"
                                name="temperatura"
                                value={temperatura}
                                min={0}
                                max={100}
                                onChange={(e) => setTemperatura(e.target.value)}
                                required
                            />
                        </div>

                        {/* el pH */}
                        <div className="ph">
                            <label htmlFor="05" className="cinco">
                                05.
                            </label>
                            <label htmlFor="pH">pH:</label>
                            <input
                                type="text"
                                step="0.01"
                                id="ph"
                                name="pH"
                                value={pH}
                                min={1}
                                max={14}
                                onChange={(e) => setpH(e.target.value)}
                                required
                            />
                        </div>
                        <div className="buttonContainer">
                            <button className="button" type="submit">
                                Enviar
                            </button>
                        </div>
                        {message && <p className="message">{message}</p>}
                    </div>
                </form>
                <img
                    src="Front/public/images/5bf990fe70c1eab345a4eb6a92c31669.png"
                    alt=""
                />
            </div>
            <div className="pipetaContainer">
                <img
                    src="./static/registro/pipeta.png"
                    alt="pipeta"
                    className="pipeta"
                />
            </div>
        </>
    );
};

export default Registro;
