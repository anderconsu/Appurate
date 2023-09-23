import { /*React*/ useState } from "react";
import "./registro.css";
import MapaRegister from "../../visible/mapa/mapaRegister";



const Registro = () => {
    const [location, setLocation] = useState([43.25437, -2.922241]);
    const [name, setName] = useState(
        "Muelle de Ibeni, Colegio Maestro García Rivero"
    );
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
                
                <div className="localizacion">
                   
                   <div className="locationHeader">
                    <label htmlFor="01" className="uno">
                        01.
                    </label>
                    <label htmlFor="location">Localización:</label>

                   </div>

                    <div className="mapa">
                        <MapaRegister />
                    </div>
                </div>


                <div className="muestras">

                    {/* oxígeno (mg/l) */}
                    <div className="oxigeno">
                        <label htmlFor="02" className="dos">02.</label>
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
                    <div className="conductividad">
                        <label htmlFor="03" className="tres">03.</label>
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
                    <div className="temperatura">
                        <label htmlFor="04" className="cuatro">04.</label>
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
                    <div className="ph">
                        <label htmlFor="05" className="cinco">05.</label>
                        <label htmlFor="pH">pH:</label>
                        <input
                            type="text"
                            step="0.01"
                            id="ph"
                            name="pH"
                            value={pH}
                            onChange={(e) => setpH(e.target.value)}
                            required
                        />
                    </div>
                    <div className="buttonContainer">
                        <button className="button" type="submit">Enviar</button>
                    </div>
                </div>

            </form>
            <img src="Front/public/images/5bf990fe70c1eab345a4eb6a92c31669.png" alt="" />
        </div>
    );
};

export default Registro;