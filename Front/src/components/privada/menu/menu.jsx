import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import PageContext from "../../../context/pageContext";

import "./menu.scss";

export const Menu = () => {
    const navigate = useNavigate();
    const { page, setPage } = useContext(PageContext);
    const proffessor = localStorage.getItem("proffesor");
    const aula = localStorage.getItem("aula");
    const institution = localStorage.getItem("institution");
    useEffect(() => {
        // console.log("pagina en el menu", page);
    }, []);

    return (
        <section className="menu">
            <div className="profile">
                <div className="iconContainer">
                    <img src="./static/menu/Avatar.png" alt="" />
                </div>
                <div className="nameContainer">
                    <p className="name">
                        {proffessor} - {aula}
                    </p>
                    <p className="institution">{institution}</p>
                </div>
            </div>
            <nav className="nav">
                <div
                    className={`NavLanding navItem  ${
                        page === "landing" ? "selected" : ""
                    }`}
                >
                    <div className="iconContainer">
                        <img src="./static/menu/Group.png" alt="" />
                    </div>
                    <Link to="/landing">Principal</Link>
                </div>
                <div
                    className={`NavLanding navItem ${
                        page === "registro" ? "selected" : ""
                    }`}
                >
                    <div className="iconContainer">
                        <img src="./static/menu/Registrar.png" alt="" />
                    </div>
                    <Link to="/registro">Registrar Info.</Link>
                </div>
                <div
                    className={`NavLanding navItem ${
                        page === "ficha" ? "selected" : ""
                    }`}
                >
                    <div className="iconContainer">
                        <img src="./static/menu/Visualizar.png" alt="" />
                    </div>
                    <Link to="/ficha">Visualizar Info.</Link>
                </div>
                <div
                    className={`NavLanding navItem ${
                        page === "recursos" ? "selected" : ""
                    }`}
                >
                    <div className="iconContainer">
                        <img src="./static/menu/Recursos.png" alt="" />
                    </div>
                    <Link to="/recursos">Recursos</Link>
                </div>
            </nav>
            <div className="logout navItem">
                <div className="iconContainer">
                    <img src="./static/menu/Logout.png" alt="" />
                </div>
                <p
                    onClick={() => {
                        localStorage.clear();
                        navigate("/");
                    }}
                    className="logoutText"
                >
                    Cerrar sesión
                </p>
            </div>
        </section>
    );
};

export default Menu;
