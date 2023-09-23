import React from "react";
import { useContext } from "react";
import PageContext from "../../context/pageContext";

import "./footer.scss";

const noCargues = ["admin", "login"];
const Footer = () => {
    const { page, setPage } = useContext(PageContext);
    return (
        <div className="footer">
            {!noCargues.includes(page) ? (
                <img
                    src="./static/footer.png"
                    alt="footer"
                    className="footerimg"
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Footer;
