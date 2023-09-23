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
            <div className="homeHeader">
                <div className="homeHeaderText">
                    <h1 className="home">
                        SÉ EL CAMBIO QUE QUIERES VER EN EL MUNDO
                    </h1>
                    <p>
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
                <p>
                    En este mapa interactivo puedes conocer sobre la calidad del
                    agua en la Ría de Bilbao.
                </p>
                <Mapa />
            </div>

            <div className="homeHow">
                <h2>¿CÓMO FUNCIONA?</h2>
                <div className="homeHowRegistrar">
                    <h3>Registrar</h3>
                    <div className="homeHowRegistrarInfo">
                        <div className="ninaimgContainer">
                            <img
                                src="./static/home/nina1.png"
                                alt="niña"
                                className="nina1"
                            />
                        </div>
                        <p>
                            Sál a la Ría y toma una muestra de agua en uno de
                            los puntos indicados en el mapa. Realiza las pruebas
                            para obtener los resultados de tu muestra y
                            registralos dentro de la plataforma.{" "}
                        </p>
                    </div>
                </div>
                <div className="homeHowVisualizar">
                    <h3 className="visualizar">Visualizar</h3>
                    <div className="homeHowVisualizarInfo">
                        <p>
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
                        <h3>Analizar</h3>
                        <div className="homeHowAnalizarInfo">
                            <div className="ninaimgContainer">
                                <img
                                    src="./static/home/nina2.png"
                                    alt="niña"
                                    className="nina2"
                                />
                            </div>
                            <p>
                                Analiza los diferentes tipos de contaminantes
                                que se encuentran comúnmente en el agua y cómo
                                afectan la salud humana. Con ayuda de estos
                                datos podrás comprender mejor los riesgos
                                asociados con la calidad del agua y cómo puedes
                                protegerte.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>CONOCE LA CALIDAD DEL AGUA EN BILBAO</h2>
                <br />
                <div>
                    <div>
                        <img
                            src="./static/home/oxigeno.png"
                            alt="oxigeno"
                            className="oxigeno"
                        />
                        <h3>Oxigeno</h3>
                        <p>
                            Es un gas soluble en el agua, y su concentración
                            varía en función de factores como la temperatura, la
                            agitación del agua, la presencia de productores
                            primarios (plantas), la materia orgánica, la
                            salinidad, etc.
                        </p>
                        <br />
                    </div>
                    <div>
                        <img
                            src="./static/home/ph.png"
                            alt="ph"
                            className="ph"
                        />
                        <h3>pH</h3>
                        <p>
                            Es la medida que indica cómo de ácida o básica es
                            una sustancia. Para conocer el pH se miden los iones
                            de hidrógeno
                        </p>
                        <br />
                    </div>
                    <div>
                        <img
                            src="./static/home/temperatura.png"
                            alt="temperatura"
                            className="temperatura"
                        />
                        <h3>Temperatura</h3>
                        <p>
                            La temperatura afecta la química del agua y las
                            funciones de los organismos acuáticos.{" "}
                        </p>
                        <br />
                    </div>
                    <div>
                        <img
                            src="./static/home/conductividad.png"
                            alt="conductividad"
                            className="conductividad"
                        />
                        <h3>Conductividad</h3>
                        <p>
                            La conductividad del agua también es un factor
                            importante para evaluar su calidad en términos de
                            salud agua potable segura suele tener una
                            conductividad eléctrica relativamente baja.
                        </p>
                        <br />
                    </div>
                </div>
                <div>
                    <img
                        src="./static/home/nino.png"
                        alt="niño"
                        className="nino"
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;
