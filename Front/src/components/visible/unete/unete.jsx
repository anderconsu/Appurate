import { useState, useEffect, useContext } from "react";
import PageContext from "../../../context/pageContext";
import "./unete.scss";

const Unete = () => {
    const { page, setPage } = useContext(PageContext);
    const [institution, setInstitution] = useState("");
    const [aula, setAula] = useState("");
    const [proffesor, setProffesor] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [message, setMessage] = useState("");

    useEffect(() => {
        setPage("unete");
    }, []);

    const handleUnete = async (e) => {
        e.preventDefault();
        setMessage("");
        if (!institution || !aula || !proffesor || !email || !phone) {
            setMessage("Todos los campos son obligatorios.");
            return;
        }
        setMessage("Información enviada.");
    };

    return (
        <>
            <div className="adminMain">
                <div className="adminBody">
                    <h2>¡Únete en este formulario!</h2>
                    <br />
                    <form className="adminForm" onSubmit={handleUnete}>
                        <div>
                            <input
                                type="text"
                                className="adminInput"
                                name="institution"
                                placeholder="Colegio"
                                onChange={(e) => setInstitution(e.target.value)}
                                value={institution}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="adminInput"
                                name="aula"
                                placeholder="Aula"
                                onChange={(e) => setAula(e.target.value)}
                                value={aula}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="adminInput"
                                name="proffesor"
                                placeholder="Profesor"
                                onChange={(e) => setProffesor(e.target.value)}
                                value={proffesor}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="adminInput"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div>
                            <input
                                type="number"
                                className="adminInput"
                                name="phone"
                                placeholder="Teléfono"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                        </div>

                        <button className="boton1" type="submit">
                            Registro
                        </button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>

                <div className="adminAstronauta">
                    <img
                        src="./static/unete/unete.png"
                        alt="unete"
                        className="unete"
                    />
                </div>
            </div>
        </>
    );
};

export default Unete;
