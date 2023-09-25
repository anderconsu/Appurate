import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import PageContext from "../../../context/pageContext";

const Login = () => {
    const { page, setPage } = useContext(PageContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const hostUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    useEffect(() => {
        setPage("login");
    }, []);
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        //falta hacer la ruta login
        try {
            const response = await fetch(`${hostUrl}/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                const user = data.user;
                localStorage.setItem("token", token);
                localStorage.setItem("user", user);
                localStorage.setItem("institution", data.institution);
                localStorage.setItem("aula", data.aula);
                localStorage.setItem("proffesor", data.proffesor);
                localStorage.setItem("email", data.email);
                localStorage.setItem("phone", data.phone);

                console.log("Sesión iniciada");
                navigate("/landing");
            } else {
                setError("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error(error);
            setError("Error, inténtalo más tarde");
        }
    };

    return (
        <>
            <div className="loginMain">
                <div className="loginBody">
                    <h2>Entra en tu cuenta</h2><br />
                    <div className="loginQuiero">
                        <p>
                            Si todavía no formas parte del proyecto, ¡Únete!
                        </p>
                        <p
                            className="azul_claro"
                            onClick={() => navigate("/unete")}
                        >
                            ¡Quiero formar parte!
                        </p>
                    </div>
                 

                    <form className="loginForm" onSubmit={handleLogin}>
                        {error && <p className="error-message">{error}</p>}

                        <div>
                            <input
                                type="text"
                                className="loginInput"
                                name="username"
                                placeholder="Usuario"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                className="loginInput"
                                name="password"
                                placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="botonTexto">
                            <button className="boton1" type="submit">
                                Entrar
                            </button>

                            <div className="loginContactanos">
                                <p className="loginMini">
                                    ¿Has olvidado la clave de acceso?
                                </p>
                                <p
                                    className="azul_claro loginMini"
                                    onClick={() =>
                                        (window.location.href =
                                            "mailto:appurate@gmail.com")
                                    }
                                >
                                    Contáctanos
                                </p>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div className="loginMundo2">
                    <img
                        src="./static/login/mundo2.png"
                        alt="mundo"
                        className="mundo"
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
