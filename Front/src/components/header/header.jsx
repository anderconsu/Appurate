import React from "react";
import { useContext } from "react";
import PageContext from "../../context/pageContext";
import { Link, useNavigate } from "react-router-dom";

import "./header.scss";

const noCargues = ["admin", "login", "ficha", "landing", "recursos", "registro"];

const Header = () => {
    const { page, setPage } = useContext(PageContext);
    const navigate = useNavigate();
    console.log(page);
    return (
        <header className="header">
            <picture className="logoContainer">
                <img
                    src="./static/logo.png"
                    alt="Mi Logo"
                    className="logo"
                    onClick={() => navigate("/")}
                />
            </picture>

            {!noCargues.includes(page) ? (
                <div className="botonesHeader">
                    <button
                        className="boton3"
                        onClick={() => navigate("/nosotros")}
                    >
                        Sobre Nosotros
                    </button>
                    <button
                        className="boton2"
                        onClick={() => navigate("/unete")}
                    >
                        ¡Únete!
                    </button>
                    <button
                        className="boton1"
                        onClick={() => navigate("/login")}
                    >
                        Entrar
                    </button>
                </div>
            ) : (
                <></>
            )}
        </header>
    );
};

export default Header;
