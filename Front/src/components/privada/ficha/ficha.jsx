import { useState, useEffect, useContext } from "react";
import PageContext from "../../../context/pageContext";
import { useNavigate } from "react-router-dom";
import "./ficha.scss";

import Menu from "../menu/menu";

const FichaVisualizacion = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { page, setPage } = useContext(PageContext);
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
        setPage("ficha");
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const aula = localStorage.getItem("aula");
            const institution = localStorage.getItem("institution");
            if (!token || !aula || !institution) {
                return;
            }
            try {
                const response = await fetch(
                    `${hostUrl}/api/institutionmetrics`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            institution: institution,
                            aula: aula,
                        }),
                    }
                );
                // console.log(response);
                if (response.ok) {
                    const result = await response.json();
                    if (result.length === 0) {
                        // console.log("No hay datos");
                        setData(null);
                        return;
                    }
                    setData(result.reverse());
                } else {
                    setError("Error al obtener los datos");
                }
            } catch (error) {
                console.error(error);
                setError("Error, inténtalo más tarde");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <main className="paginaFicha">
            <Menu />
            <div className="resultadosMain">
                <div className="tituloPeliroja">
                    <h2>VISUALIZA TUS RESULTADOS</h2>

                    <br />
                    <div className="pelirojaContainer">
                        <img
                            src="./static/ficha/peliroja.png"
                            alt="peliroja"
                            className="peliroja"
                        />
                    </div>
                </div>

                <div className="fichas">
                    {error && <p>Error : {error}</p>}
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        <>
                            {data ? (
                                <p className="p1 entry">
                                    Última prueba registrada:
                                </p>
                            ) : (
                                <p className="p1 entry bad">
                                    No se encontraron pruebas.
                                </p>
                            )}
                            {data &&
                                data.map((item, index) => (
                                    <div
                                        className="ficha-visualizacion"
                                        key={index}
                                    >
                                        <div className="numeroPruebaContainer">
                                            <p className="numeroPrueba">
                                                Prueba Nº: {data.length - index}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="top p1">Fecha:</p>{" "}
                                            <p className="columnaDos p4">
                                                {new Date(
                                                    item.date
                                                ).toLocaleDateString("es-ES")}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="columnaUno p1">
                                                Localización:
                                            </p>{" "}
                                            <p className="columnaDos p4">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="columnaUno p1">
                                                Oxígeno:
                                            </p>{" "}
                                            <p className="columnaDos p4">
                                                {item.properties.Oxigeno}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="columnaUno p1">
                                                Conductividad:
                                            </p>{" "}
                                            <p className="columnaDos p4">
                                                {item.properties.Conductividad}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="columnaUno p1">
                                                Temperatura:
                                            </p>{" "}
                                            <p className="columnaDos p4">
                                                {item.properties.Temperatura}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="columnaUno p1">pH:</p>{" "}
                                            <p className="columnaDos p4">
                                                {item.properties.pH}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="bottom p1">
                                                Análisis preeliminar:
                                            </p>{" "}
                                            <p className="columnaDos p4">
                                                {item.prediction === 1
                                                    ? "Apto para baño"
                                                    : "No apto para baño"}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </>
                    )}
                </div>
                <div className="pruebasData">
                    <h2 className="pruebasVS">
                        PRUBAS EN CLASE VS. PRUEBAS LABORATORIO
                    </h2>
                    <div className="graficosMain">
                        <img
                            className="graficoUno"
                            src="./static/ficha/image51.png"
                            alt="gráfico 1"
                        />

                        <img
                            className="graficoDos"
                            src="./static/ficha/image52.png"
                            alt="gráfico2"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FichaVisualizacion;
