import { useState, useEffect, useContext } from "react";
import PageContext from "../../context/pageContext";
import "./admin.scss";

const Admin = () => {
    const { page, setPage } = useContext(PageContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [institution, setInstitution] = useState("");
    const [aula, setAula] = useState("");
    const [proffesor, setProffesor] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const hostUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        setPage("admin");
    }, []);

    const handleAdmin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${hostUrl}/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                    institution,
                    aula,
                    proffesor,
                    email,
                    phone,
                }),
            });

            if (response.ok) {
                setMessage("Registro completado");
                console.log("Registro completado");
            } else {
                let data = await response.json();
                if (data.message === "User already exists") {
                    setError("El usuario ya existe");
                } else {
                    setError("Fallo de registro");
                }
            }
        } catch (error) {
            setError("Error, inténtalo más tarde");
        }
    };

    return (
        <>
            <div className="adminMain">
                <div className="adminBody">
                    <h2>Registro de Aula</h2>
                    <br />
                    {/* <p>
        Si todavía no formas parte del proyecto únete al proyecto.
        </p> */}
                    <form className="adminForm" onSubmit={handleAdmin}>
                        {error && <p className="error-message">{error}</p>}

                        <div>
                            <input
                                type="text"
                                className="adminInput"
                                name="username"
                                placeholder="Usuario"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                className="adminInput"
                                name="password"
                                placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

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
                        src="./static/admin/admin.png"
                        alt="admin"
                        className="admin"
                    />
                </div>
            </div>
        </>
    );
};

export default Admin;
