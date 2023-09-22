import { /*React*/ useState } from "react";
import "./registro.css";

const Registro = () => {
    const [location, setLocation] = useState("test");
    const [pH, setpH] = useState("");
    const [oxigeno, setOxigeno] = useState("");
    const [conductividad, setConductividad] = useState("");
    const [temperatura, setTemperatura] = useState("");
    const [error, setError] = useState(null);
    const hostUrl = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const institution = localStorage.getItem("institution");
        const aula = localStorage.getItem("aula");

        try {
            const response = await fetch(`${hostUrl}/api/prediction`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
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
                setLocation("");
                setpH("");
                setOxigeno("");
                setConductividad("");
                setTemperatura("");
            } else {
                setError("Error al enviar los datos de muestra");
            }
        } catch (error) {
            console.error(error);
            setError("Error, inténtalo más tarde");
        }
    };

    console.log("Datos de la muestra enviados:");
    console.log("Localización:", location);
    console.log("pH:", pH);
    console.log("Oxígeno (mg/l):", oxigeno);
    console.log("Conductividad:", conductividad);
    console.log("Temperatura:", temperatura);

    return (
        <div className="registroGeneral">
            <form onSubmit={handleSubmit} className="formularioMuestra">
                <h2>REGISTRA LOS DATOS DE LA MUESTRA</h2>

                {error && <p className="error-message">{error}</p>}

                {/* localización */}
                <div className="campo">
                    <label htmlFor="01" className="01">
                        01.
                    </label>
                    <label htmlFor="location">Localización:</label>

                    <div className="mapaRegistro">AQUÍ VA EL MAPA</div>

                    {/* <select
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Seleccione una localización
                        </option>
                        <option value="Punto 1">Punto 1 - Ría de Bilbao</option>
                        <option value="Punto 2">Punto 2 - Ría de Bilbao</option>
                        <option value="Punto 3">Punto 3 - Ría de Bilbao</option>
                    </select> */}
                </div>

                {/* institución */}
                {/* <div className="campo">
                    <label htmlFor="institution">Institución:</label>
                    <select
                        id="institution"
                        name="institution"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Seleccione una institución
                        </option>
                        <option value="Institución 1">Institución 1</option>
                        <option value="Institución 2">Institución 2</option>
                        <option value="Institución 3">Institución 3</option>
                       
                    </select>
                </div> */}

                <div className="formularioMuestras">
                    {/* oxígeno (mg/l) */}
                    <div className="campo">
                        <label htmlFor="oxigeno">Oxígeno (mg/l):</label>
                        <input
                            type="text"
                            step="0.01"
                            id="oxigeno"
                            name="oxigeno"
                            value={oxigeno}
                            onChange={(e) => setOxigeno(e.target.value)}
                            required
                        />
                    </div>

                    {/* conductividad */}
                    <div className="campo">
                        <label htmlFor="conductividad">Conductividad:</label>
                        <input
                            type="text"
                            step="0.01"
                            id="conductividad"
                            name="conductividad"
                            value={conductividad}
                            onChange={(e) => setConductividad(e.target.value)}
                            required
                        />
                    </div>

                    {/* temperatura */}
                    <div className="campo">
                        <label htmlFor="temperatura">Temperatura:</label>
                        <input
                            type="text"
                            step="0.01"
                            id="temperatura"
                            name="temperatura"
                            value={temperatura}
                            onChange={(e) => setTemperatura(e.target.value)}
                            required
                        />
                    </div>

                    {/* el pH */}
                    <div className="campo">
                        <label htmlFor="pH">pH:</label>
                        <input
                            type="text"
                            step="0.01"
                            id="pH"
                            name="pH"
                            value={pH}
                            onChange={(e) => setpH(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="button">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Registro;
