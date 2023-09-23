// import React from 'react'
import { useContext, useEffect } from "react";
import PageContext from "../../../context/pageContext";
const Recursos = () => {
    const { page, setPage } = useContext(PageContext);

    useEffect(() => {
        setPage("recursos");
    }, []);
    return <h1 className="recursos">ESTO ES RECURSOS</h1>;
};

export default Recursos;
