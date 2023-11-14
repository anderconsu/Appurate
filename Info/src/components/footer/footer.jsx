import React from "react";
import { useContext } from "react";
import PageContext from "../../context/pageContext";

import "./footer.scss";

const noCargues = ["admin", "login", "unete" ];
const Footer = () => {
    const { page, setPage } = useContext(PageContext);
    return (
        <div className="footer">
            <div className="Contacto">
                <p className="escribenos bold">Escríbenos a:</p>
                
                <div className="containerMail">
                    <p> MAIL: </p>
                    
                    <a href="mailto:appurate.org@gmail.com">appurate.org@gmail.com</a>
                    
                </div>

            </div>
        </div>
    );
};

export default Footer;
