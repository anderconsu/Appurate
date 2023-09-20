import { useState } from 'react';
import './login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const hostUrl = import.meta.env.VITE_BACKEND_URL

  const handleLogin = async (e) => {
    e.preventDefault();

  //falta hacer la ruta login
    try {
      const response = await fetch(`${hostUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        
        console.log("Sesión iniciada");
      } else {
        
        setError("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
      setError("Error, inténtalo más tarde");
    }
  }

  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleLogin}>
        <h3>Iniciar sesión</h3>

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
