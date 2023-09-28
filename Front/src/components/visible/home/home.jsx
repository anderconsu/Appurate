import React, { useEffect, useContext } from "react";
import "./home.scss";
import Mapa from "../mapa/mapa";
import { useNavigate } from "react-router-dom";

import PageContext from "../../../context/pageContext";
const Home = () => {
    const navigate = useNavigate();
    const { page, setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("home");
    }, []);
    return (
        <main className="homeMain">
            <h1 className="home">SÉ EL CAMBIO QUE QUIERES VER EN EL MUNDO</h1>
            <div className="homeHeader">
                <div className="homeHeaderText">
                    <p className="p1 atraves">
                        A través de esta webapp, los estudiantes podrán
                        registrar datos de muestras de agua, visualizarlos en un
                        formato fácil de entender y acceder a información
                        educativa sobre contaminantes comunes y cómo afectan la
                        salud humana.
                    </p>
                    <button
                        className="boton1"
                        onClick={() => navigate("/unete")}
                    >
                        ¡Únete!
                    </button>
                </div>

                <div className="mundoimgContainer">
                    <img
                        src="./static/home/mundo.png"
                        alt="mundo"
                        className="mundo"
                    />
                </div>
            </div>

            <div className="homeMapa">
                <p className="p3">
                    En este mapa interactivo puedes conocer la calidad del agua
                    en la Ría de Bilbao.
                </p>
                <Mapa />
            </div>

            <div className="homeHow">
                <h2 className="h2">¿CÓMO FUNCIONA?</h2>
                <div className="homeHowRegistrar">
                    <h3 className="h3">Registra</h3>
                    <div className="homeHowRegistrarInfo">
                        <div className="ninaimgContainer">
                            <img
                                src="./static/home/nina1.png"
                                alt="niña"
                                className="nina1"
                            />
                        </div>
                        <p className="p2">
                            Sal a la Ría y toma una muestra de agua en uno de
                            los puntos indicados en el mapa. Realiza las pruebas
                            para obtener los resultados de tu muestra y
                            regístralos dentro de la plataforma.{" "}
                        </p>
                    </div>
                </div>
                <div className="homeHowVisualizar">
                    <h3 className="visualizar h3">Visualiza</h3>
                    <div className="homeHowVisualizarInfo">
                        <p className="p2">
                            Te mostraremos los datos recopilados en un formato
                            fácil de entender, como gráficos y tablas. Así
                            puedes comprender mejor cómo se encuentra la calidad
                            del agua en el lugar donde tomaste la muestra.
                        </p>
                        <div className="ninaimgContainer">
                            <img
                                src="./static/home/nina3.png"
                                alt="niña"
                                className="nina3"
                            />
                        </div>
                    </div>
                    <div className="homeHowAnalizar">
                        <h3 className="h3">Analiza</h3>
                        <div className="homeHowAnalizarInfo">
                            <div className="ninaimgContainer">
                                <img
                                    src="./static/home/nina2.png"
                                    alt="niña"
                                    className="nina2"
                                />
                            </div>
                            <p className="p2">
                                Analiza los diferentes tipos de contaminantes
                                que se encuentran en el agua y cómo afectan la
                                salud humana. Con ayuda de estos datos podrás
                                comprender mejor los riesgos asociados a la
                                calidad del agua y cómo puedes protegerte.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeSpecs">
                <h2 className="conoceCalidad h2">
                    CONOCE LA CALIDAD DEL AGUA EN BILBAO
                </h2>
                <div className="caracteristicasImagen">
                    <div className="cuatroCaracteristicas">
                        <div className="caracteristica">
                            <div className="propiedadImgContainer">
                                <img
                                    src="./static/home/oxigeno.png"
                                    alt="oxigeno"
                                    className="oxigeno"
                                />
                            </div>
                            <div className="textAndtext">
                                <h3 className="h3">Oxígeno</h3>
                                <p className="p2">
                                    Es un gas soluble en el agua y su
                                    concentración varía en función de factores
                                    como la temperatura, la agitación del agua,
                                    la presencia de productores primarios
                                    (plantas), la materia orgánica, la
                                    salinidad, etc.
                                </p>
                            </div>
                        </div>
                        <div className="caracteristica">
                            <div className="propiedadImgContainer">
                                <img
                                    src="./static/home/ph.png"
                                    alt="ph"
                                    className="ph"
                                />
                            </div>
                            <div className="textAndtext">
                                <h3 className="h3">pH</h3>
                                <p className="p2">
                                    Es la medida que indica cómo de ácida o
                                    básica es una sustancia. Para conocer el pH
                                    se miden los iones de hidrógeno.
                                </p>
                            </div>
                        </div>
                        <div className="caracteristica">
                            <div className="propiedadImgContainer">
                                <img
                                    src="./static/home/temperatura.png"
                                    alt="temperatura"
                                    className="temperatura"
                                />
                            </div>
                            <div className="textAndtext">
                                <h3>Temperatura</h3>
                                <p className="p2">
                                    La temperatura afecta a la química del agua
                                    y las funciones de los organismos acuáticos.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="caracteristica">
                            <div className="propiedadImgContainer">
                                <img
                                    src="./static/home/conductividad.png"
                                    alt="conductividad"
                                    className="conductividad"
                                />
                            </div>
                            <div className="textAndtext">
                                <h3>Conductividad</h3>
                                <p className="p2">
                                    La conductividad del agua también es un
                                    factor importante para evaluar su calidad en
                                    términos de salud. El agua potable segura
                                    suele tener una conductividad eléctrica
                                    relativamente baja.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ninoimgContainer">
                        <img
                            src="./static/home/nino.png"
                            alt="niño"
                            className="nino"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
