// import React from 'react'
import { useContext, useEffect } from "react";
import PageContext from "../../../context/pageContext";
import { useNavigate } from "react-router-dom";
import "./recursos.scss";
import Menu from "../menu/menu";

const Recursos = () => {
    const { page, setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const hostUrl = import.meta.env.VITE_BACKEND_URL;

    const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
        try {
            const auth = await fetch(`${hostUrl}/user/authCheck`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (auth.status === 200) {
                return true;
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
            setError("Error, inténtalo más tarde");
        }
    };

    useEffect(() => {
        try {
            checkAuth();
        } catch (error) {
            console.error("useEffect error", error);
            setError("Error, inténtalo más tarde");
        }
    }, []);

    useEffect(() => {
        setPage("recursos");
    }, []);
    return (
        <main className="paginaRecursos">
            <Menu />
            <div className="recursosMain">
                <h2 className="recursos">RECURSOS ADICIONALES</h2>
                <p className="p1">
                    Aquí encontraréis recursos adicionales que os ayudarán a
                    aprender más sobre el proyecto.
                </p>
                <br />

                <div className="recursosUtilizar">
                    <h2>¿QUÉ VAMOS A UTILIZAR?</h2>
                    <br />
                    <div className="recursosAzul">
                        <div className="recursosMedidor">
                            <div className="recursosImgContainer">
                                <img
                                    src="./static/recursos/medidor.png"
                                    alt="medidor"
                                    className="medidor"
                                />
                            </div>
                            <div className="recursosTextContainer">
                                <h3>Medidor de Oxígeno Disuelto</h3>
                                <p className="p2">
                                    Este dispositivo mide la concentración de
                                    oxígeno disuelto en el agua. Se sumerge en
                                    la muestra y visualiza la cantidad de
                                    oxígeno en miligramos por litro (mg/L) o
                                    partes por millón (ppm).
                                </p>
                            </div>
                        </div>
                        <div className="recursosConductimetro">
                            <div className="recursosTextContainer">
                                <h3>Conductímetro</h3>
                                <p className="p2">
                                    Mide la conductividad eléctrica del agua,
                                    que es una indicación de la cantidad de
                                    sales y minerales disueltos en el agua. Los
                                    valores se expresan en microsiemens por
                                    centímetro (µS/cm).
                                </p>
                            </div>
                            <div className="recursosImgContainer">
                                <img
                                    src="./static/recursos/conductimetro.png"
                                    alt="conductimetro"
                                    className="conductimetro"
                                />
                            </div>
                        </div>
                        <div className="recursosTermometro">
                            <div className="recursosImgContainer">
                                <img
                                    src="./static/recursos/termometro.png"
                                    alt="termometro"
                                    className="termometro"
                                />
                            </div>
                            <div className="recursosTextContainer">
                                <h3>Termómetro</h3>
                                <p className="p2">
                                    Utilizado para medir la temperatura del agua
                                    en grados Celsius (°C). La temperatura puede
                                    afectar a los organismos acuáticos y a la
                                    química del agua.
                                </p>
                            </div>
                        </div>
                        <div className="recursosMedidor2">
                            <div className="recursosTextContainer">
                                <h3>Medidor de pH</h3>
                                <p className="p2">
                                    Mide el nivel de acidez o alcalinidad del
                                    agua en una escala de 0 a 14, donde 7 es
                                    neutro. Valores por debajo de 7 indican
                                    acidez, y valores por encima de 7 indican
                                    alcalinidad.
                                </p>
                            </div>
                            <div className="recursosImgContainer">
                                <img
                                    src="./static/recursos/medidor2.png"
                                    alt="medidor2"
                                    className="medidor2"
                                />
                            </div>
                        </div>
                        <div className="recursosEspectrofonometro">
                            <div className="recursosImgContainer">
                                <img
                                    src="./static/recursos/espectro.png"
                                    alt="espectro"
                                    className="espectro"
                                />
                            </div>
                            <div className="recursosTextContainer">
                                <h3>Espectrofotómetro</h3>
                                <p className="p2">
                                    Este instrumento se usa para analizar la
                                    concentración de sustancias específicas en
                                    el agua, como nutrientes, metales pesados o
                                    productos químicos tóxicos. Emite y mide la
                                    luz absorbida por la muestra, lo que
                                    proporciona información sobre la cantidad de
                                    la sustancia presente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recursosUtilizarYT">
                    <h2>CÓMO TOMAR LAS MUESTRAS CON SEGURIDAD </h2>
                    <br />
                    <div className="recursosYoutube">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/OZQi3DLogqE?si=vblpwiGk-pxzuwzp"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Recursos;
