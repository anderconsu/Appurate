import React from 'react'
import { useContext } from 'react';
import PageContext from '../../context/pageContext';

const noCargues = ["admin", "login"];

const Header = () => {
  const { page, setPage } = useContext(PageContext);
  console.log(page);
  return (
    <header className="header">
      <img src="./static/logo.png" alt="Mi Logo" className="logo" />

      {!noCargues.includes(page)  ? (
        <>
        <button className="boton3">Sobre Nosotros</button>
        <button className="boton2">¡Únete!</button>
        <button className="boton1">Entrar</button>        
        </>
      ): (<></>)}
     
    </header>
  );
};

export default Header;
