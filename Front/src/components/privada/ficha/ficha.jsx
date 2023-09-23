// import React from 'react'
import { useState, useEffect } from 'react';

// import { hostUrl } from 'hostUrl';

const FichaVisualizacion = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      try {
        const response = await fetch(`${hostUrl}/api/direccioni`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
          body: JSON.stringify({
            institution: "1",
          }),
        });

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
    <div className="ficha-visualizacion">
      <h2>Ficha de Visualización</h2>
      <p>Institución: </p>
      <p>pH: {data.pH}</p>
      <p>Oxígeno (mg/l): {data.oxigeno}</p>
      <p>Conductividad: {data.conductividad}</p>
      <p>Temperatura: {data.Temperatura}</p>
    </div>
  );
};

export default FichaVisualizacion;
