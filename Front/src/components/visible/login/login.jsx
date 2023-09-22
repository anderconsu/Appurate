import { useState } from "react";
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const hostUrl = import.meta.env.VITE_BACKEND_URL;

    const handleLogin = async (e) => {
        e.preventDefault();

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
                
            } else {
                setError("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error(error);
            setError("Error, inténtalo más tarde");
        }
    };

    return (
        
        <div className="a-right">
            <h3>Entra en tu cuenta</h3><br /><br />
            <p>Si todavía no formas parte del proyecto únete al proyecto.</p><p>¡Quiero formar parte!</p>
            <form className="infoForm authForm" onSubmit={handleLogin}>
                

                {error && <p className="error-message">{error}</p>}

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="Usuario"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="infoInput"
                        name="password"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <button className="button infoButton" type="submit">
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default Login;
