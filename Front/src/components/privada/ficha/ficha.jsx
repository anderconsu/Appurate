import { useState, useEffect, useContext } from "react";
import PageContext from "../../../context/pageContext";
import { useNavigate } from "react-router-dom";
import "./ficha.scss";

import Menu from "../menu/menu";

const FichaVisualizacion = () => {
    const [data, setData] = useState({});
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

                if (response.ok) {
                    const result = await response.json();
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

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <main className="paginaFicha">
            <Menu />
            <div className="resultadosMain">
                <div className="tituloPeliroja">
                    <h2>
                        VISUALIZA TUS RESULTADOS
                        <p>Última prueba registrada:</p>
                    </h2>

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
                    {data.map((data, index) => (
                        <div className="ficha-visualizacion" key={index}>
                            <div>
                                <p className=" top">Institución:</p>{" "}
                                <p className="columnaDos">{data.institution}</p>
                            </div>
                            <div>
                                <p className="columnaUno">Aula: </p>{" "}
                                <p className="columnaDos">{data.aula}</p>
                            </div>
                            <div>
                                <p className="columnaUno">Fecha:</p>{" "}
                                <p className="columnaDos">{data.date}</p>
                            </div>
                            <div>
                                <p className="columnaUno">Localización:</p>{" "}
                                <p className="columnaDos">{data.name}</p>
                            </div>
                            <div>
                                <p className="columnaUno">Oxígeno:</p>{" "}
                                <p className="columnaDos">
                                    {data.properties.Oxigeno}
                                </p>
                            </div>
                            <div>
                                <p className="columnaUno">Conductividad:</p>{" "}
                                <p className="columnaDos">
                                    {data.properties.Conductividad}
                                </p>
                            </div>
                            <div>
                                <p className="columnaUno">Temperatura:</p>{" "}
                                <p className="columnaDos">
                                    {data.properties.Temperatura}
                                </p>
                            </div>
                            <div>
                                <p className=" bottom">pH:</p>{" "}
                                <p className="columnaDos">
                                    {data.properties.pH}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

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
        </main>
    );
};

export default FichaVisualizacion;
