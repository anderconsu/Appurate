// import React from 'react'
import { useState, useEffect } from "react";

const FichaVisualizacion = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const hostUrl = import.meta.env.VITE_BACKEND_URL;

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
                    setData(result);
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
        <div>
            {data.map((data, index) => (
                <div className="ficha-visualizacion" key={index}>
                    <h2>Ficha de Visualización</h2>
                    <p>Institución: {data.institution}</p>
                    <p>Aula: {data.aula}</p>
                    <p>pH: {data.properties.pH}</p>
                    <p>Oxígeno (mg/l): {data.properties.Oxigeno}</p>
                    <p>Conductividad: {data.properties.Conductividad}</p>
                    <p>Temperatura: {data.properties.Temperatura}</p>
                </div>
            ))}
        </div>
    );
};

export default FichaVisualizacion;
