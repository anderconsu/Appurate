// import React from 'react'
import { useState, useEffect } from "react";
import PageContext from "../../../context/pageContext";

const FichaVisualizacion = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useContext(PageContext);
    const hostUrl = import.meta.env.VITE_BACKEND_URL;

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
        <>
            <h2>VISUALIZA TUS RESULTADOS</h2>
            <div>
                <img
                    src="./static/ficha/peliroja.png"
                    alt="peliroja"
                    className="peliroja"
                />
            </div>
            <div>
                {data.map((data, index) => (
                    <div className="ficha-visualizacion" key={index}>
                        <p>Institución: {data.institution}</p>
                        <p>Aula: {data.aula}</p>
                        <p>Fecha: {data.date}</p>
                        <p>Localización: {data.name}</p>
                        <p>Oxígeno: {data.properties.Oxigeno} mg/l</p>
                        <p>
                            Conductividad: {data.properties.Conductividad} µS/cm
                        </p>
                        <p>Temperatura: {data.properties.Temperatura} °C</p>
                        <p>pH: {data.properties.pH}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FichaVisualizacion;
