import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./menu.scss";

export const Menu = () => {
    const navigate = useNavigate();
    const proffessor = localStorage.getItem("proffesor");
    const aula = localStorage.getItem("aula");
    const institution = localStorage.getItem("institution");

    return (
        <section className="menu">
            <div className="profile">
                <p className="name">
                    {proffessor}-{aula}{" "}
                </p>
                <p className="institution">{institution}</p>
            </div>
            <nav className="nav">
                <div className="NavLanding">
                    <Link to="/landing">Principal</Link>
                </div>
                <div className="NavLogin">
                    <Link to="/registro">Registrar Info.</Link>
                </div>
                <div className="NavFicha">
                    <Link to="/ficha">Visualizar Info.</Link>
                </div>
                <div className="NavRecursos">
                    <div className="iconContainer">
                        <img src="./static/menu/Group.png" alt="" />
                    </div>
                    <Link to="/recursos">Recursos</Link>
                </div>
            </nav>
            <div className="logout">
                <p>Cerrar sesión</p>
            </div>
        </section>
    );
};

export default Menu;
