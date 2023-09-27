import { useContext, useEffect } from "react";

import "./nosotros.scss";

import PageContext from "../../../context/pageContext";

const Nosotros = () => {
    const { page, setPage } = useContext(PageContext);

    useEffect(() => {
        setPage("nosotros");
    }, []);
    return (
        <div className="aboutGeneral">
            <h1 className="h1">SOBRE NOSOTROS</h1>
            <div className="ayudando">
                <div className="ayudandoText">
                    <h2>AYUDANDO AL MUNDO DE LA MANO DE LOS JOVENES</h2>
                    <p className="p1">
                        Nuestra solución educativa tiene como objetivo empoderar
                        a los jóvenes para que aprendan, exploren y tomen
                        conciencia sobre la calidad del agua en su ciudad. Los
                        estudiantes podrán registrar datos de muestras de agua,
                        visualizarlos en un formato fácil de entender y acceder
                        a información educativa sobre contaminantes comunes y
                        cómo afectan la salud humana.
                    </p>
                </div>
                <div className="superwomanimgContainer">
                    <img
                        src="./static/nosotros/superwoman.png"
                        alt="superwoman"
                        className="superwoman"
                    />
                </div>
            </div>

            <div className="forma">
                <div className="formaTexto">
                    <h2>¡FORMA PARTE DEL CAMBIO!</h2>
                    <p className="p1">
                        Los datos recopilados por los estudiantes y los
                        profesores se utilizarán para identificar problemas en
                        la calidad del agua, informar a las autoridades locales,
                        crear conciencia en la comunidad y promover cambios de
                        comportamiento positivos. Creemos que al involucrar a
                        los jóvenes en el proceso de toma de muestras y análisis
                        de datos, estarán mejor equipados para comprender y
                        proteger la calidad del agua en su comunidad.
                    </p>
                </div>
                <div className="morenitaimgContainer">
                    <img
                        src="./static/nosotros/morenita.png"
                        alt="morenita"
                        className="morenita"
                    />
                </div>
            </div>

            <div className="tratando">
                <div className="tratandoText">
                    <h2>TRATANDO EL AGUA DE FORMA INTELIGENTE</h2>
                    <p className="p1">
                        Nuestro objetivo es proporcionar información útil para
                        la gestión sostenible del agua por parte de diferentes
                        agentes, tanto públicos como privados y del tercer
                        sector. Por medio de nuestra solución de monitorización
                        de la calidad de agua en tiempo real podemos transformar
                        datos del agua en información útil para la gestión
                        sostenible del agua. Nuestro trabajo tiene un impacto
                        positivo en el planeta, que permite una gestión más
                        eficiente y sostenible del recurso hídrico a lo largo de
                        todo su ciclo, ya sea dentro de instalaciones
                        industriales o en un entorno urbano.
                    </p>
                </div>
                <div className="aquadataimgContainer">
                    <img
                        src="./static/nosotros/aquadata.png"
                        alt="aquadata"
                        className="aquadata"
                    />
                </div>
            </div>
            <div className="nosotrosPartners">
                <h3>Partners Redes industriales</h3>
                <div className="patners1">
                    <div className="1imgContainer">
                        <img
                            src="./static/nosotros/1.png"
                            alt="1"
                            className="1"
                        />
                    </div>
                    <div className="2imgContainer">
                        <img
                            src="./static/nosotros/2.png"
                            alt="2"
                            className="2"
                        />
                    </div>
                    <div className="3imgContainer">
                        <img
                            src="./static/nosotros/3.png"
                            alt="3"
                            className="3"
                        />
                    </div>
                </div>

                <h3>Partners Redes cientifícos</h3>
                <div className="patners2">
                    <div className="4imgContainer">
                        <img
                            src="./static/nosotros/4.png"
                            alt="4"
                            className="4"
                        />
                    </div>
                    <div className="5imgContainer">
                        <img
                            src="./static/nosotros/5.png"
                            alt="5"
                            className="5"
                        />
                    </div>
                    <div className="6imgContainer">
                        <img
                            src="./static/nosotros/6.png"
                            alt="6"
                            className="6"
                        />
                    </div>
                </div>

                <h3>Partners Territorio Bizkaia</h3>
                <div className="patners3">
                    <div className="7imgContainer">
                        <img
                            src="./static/nosotros/7.png"
                            alt="7"
                            className="7"
                        />
                    </div>
                    <div className="8imgContainer">
                        <img
                            src="./static/nosotros/8.png"
                            alt="8"
                            className="8"
                        />
                    </div>
                    <div className="9imgContainer">
                        <img
                            src="./static/nosotros/9.png"
                            alt="9"
                            className="9"
                        />
                    </div>
                    <div className="10imgContainer">
                        <img
                            src="./static/nosotros/10.png"
                            alt="10"
                            className="10"
                        />
                    </div>
                    <div className="11imgContainer">
                        <img
                            src="./static/nosotros/11.png"
                            alt="11"
                            className="11"
                        />
                    </div>
                </div>
            </div>
            <div className="nosotrosEquipo">
                <h3>Equipo "Bewaters" (Data, UX-UI y FullStack)</h3>
                <div className="grupo">
                    <img
                        src="./static/nosotros/grupo.jpg"
                        alt="grupo"
                        className="grupo"
                    />
                </div>
                <div className="bbkBootcampContainer">
                    <img
                        src="./static/nosotros/logoBootcamp.png"
                        alt="bbkBootcamp"
                        className="bbkBootcamp"
                    />
                </div>
            </div>

            {/* <div className="mision">
                                <div className="misionTexto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora voluptatibus quod libero dolores deserunt placeat illo animi ex natus, at repudiandae pariatur nulla eaque veniam laborum nesciunt mollitia recusandae!
                                </div>
                                <div className="misionCabecera">Misión</div>

                            </div>

                            <div className="vision">

                                <div className="visionCabecera">Visión</div>
                                <div className="visionTexto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum numquam beatae quas fuga, eum assumenda reiciendis harum, quae aliquam esse laborum itaque necessitatibus quasi eveniet repellat. Neque, repellendus? Enim!
                                </div>

                            </div>


                            <div className="equipo">

                                <div className="equipoTexto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptate eveniet doloribus corrupti, impedit delectus velit voluptatum voluptatem, ex iusto porro reprehenderit suscipit, nobis quaerat minima atque ratione cupiditate! Ipsam.
                                </div>
                            <div className="equipoCabecera">Equipo</div>

                            </div>

                            <div className="partners">
                                
                                <div className="partnersImg">
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                </div>

                                <div className="partnersCabecera">Partners</div>
                            </div>

                            <button className="boton1" type="submit">Únete</button> */}
        </div>
    );
};

export default Nosotros;
