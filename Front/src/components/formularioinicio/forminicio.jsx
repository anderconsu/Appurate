import { useState } from 'react';
import './forminicio.css'
const FormInicio = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const handleLogin = (e) => {
    e.preventDefault()
    console.log('Hola')
}
  return (
    
    <div className="a-right">
    <form className="infoForm authForm" onSubmit={handleLogin}>
        <h3>Iniciar sesión</h3>

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
       
        <button className="button infoButton" type="submit">Entrar
        </button>
    </form>
</div>

    
  );
};


export default FormInicio;
