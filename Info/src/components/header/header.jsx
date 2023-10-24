import React, { useEffect } from "react";
import { useContext, useState } from "react";
import PageContext from "../../context/pageContext";
import { Link, redirect, useNavigate } from "react-router-dom";

import "./header.scss";

const noCargues = [
    "admin",
    "login",
    "ficha",
    "landing",
    "recursos",
    "registro",
];

const Header = () => {
    const { page, setPage } = useContext(PageContext);
    const navigate = useNavigate();
    return (
        <header className="header">
            <picture className="logoContainer">
                <img
                    src="./static/logo.png"
                    alt="Mi Logo"
                    className="logo"
                    onClick={() =>
                        (window.location.href = "https://appurate.org")
                    }
                />
            </picture>
            <button
                className="boton1 bold"
                onClick={() => (window.location.href = "https://appurate.org")}
            >
                Descubre la web
            </button>
        </header>
    );
};

export default Header;
