import { useState, useEffect, useContext } from 'react';
import PageContext from '../../context/pageContext';
import './admin.css';


const Admin = () => {
  const { page, setPage } = useContext(PageContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [institution, setInstitution] = useState('');
  const [aula, setAula] = useState('');
  const [proffesor, setProffesor] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const hostUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    setPage("admin");
}, []);

  const handleAdmin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${hostUrl}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, institution, aula, proffesor, email, phone }),
      });

      if (response.ok) {
        
        console.log("Registro completado");
      } else {
        
        setError("Fallo de registro");
      }
    } catch (error) {
      console.error(error);
      setError("Error, inténtalo más tarde");
    }
  }

  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleAdmin}>
        <h3>Registro de Aula</h3>

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

        <div>
          <input
            type="text"
            className="infoInput"
            name="institution"
            placeholder="Colegio"
            onChange={(e) => setInstitution(e.target.value)}
            value={institution}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="aula"
            placeholder="Aula"
            onChange={(e) => setAula(e.target.value)}
            value={aula}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="proffesor"
            placeholder="Profesor"
            onChange={(e) => setProffesor(e.target.value)}
            value={proffesor}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <input
            type="number"
            className="infoInput"
            name="phone"
            placeholder="Teléfono"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <button className="button infoButton" type="submit">
          Registro
        </button>
      </form>
    </div>
  );
};

export default Admin;

