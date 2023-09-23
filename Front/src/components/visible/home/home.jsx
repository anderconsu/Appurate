import React, { useEffect, useContext } from "react";
import "./home.css";
import Mapa from "../mapa/mapa";

import PageContext from "../../../context/pageContext";
const Home = () => {
    const { page, setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("home");
    }, []);
    return (
        <>
            <div>
                <div>
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
                    <button className="boton1">¡Únete!</button>
                    <br />
                    <br />
                </div>
                <div>
                    <img
                        src="./static/home/mundo.png"
                        alt="mundo"
                        className="mundo"
                    />
                </div>
            </div>

            <div>
                <p>
                    En este mapa interactivo puedes conocer sobre la calidad del
                    agua en la Ría de Bilbao.
                </p>
                <Mapa />
                {/* Aquí va el mapa */}
                <br />
                <br />
            </div>

            <div>
                <h2>¿COMO FUNCIONA?</h2>
                <br />
                <div>
                    <img
                        src="./static/home/nina1.png"
                        alt="niña"
                        className="nina1"
                    />
                    <img
                        src="./static/home/nina3.png"
                        alt="niña"
                        className="nina3"
                    />
                </div>
                <div>
                    <h3>Registrar:</h3>
                    <p>
                        Sál a la Ría y toma una muestra de agua en uno de los
                        puntos indicados en el mapa. Realiza las pruebas para
                        obtener los resultados de tu muestra y registralos
                        dentro de la plataforma.{" "}
                    </p>
                    <br />
                    <h3>Visualizar</h3>
                    <p>
                        Te mostraremos los datos recopilados en un formato fácil
                        de entender, como gráficos y tablas. Así puedes
                        comprender mejor cómo se encuentra la calidad del agua
                        en el lugar donde tomaste la muestra.
                    </p>
                    <br />
                    <h3>Analizar:</h3>
                    <p>
                        Analiza los diferentes tipos de contaminantes que se
                        encuentran comúnmente en el agua y cómo afectan la salud
                        humana. Con ayuda de estos datos podrás comprender mejor
                        los riesgos asociados con la calidad del agua y cómo
                        puedes protegerte.
                    </p>
                    <br />
                </div>
                <div>
                    <img
                        src="./static/home/nina2.png"
                        alt="niña"
                        className="nina2"
                    />
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
        </>
    );
};

export default Home;
