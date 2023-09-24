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
            <div className="ayudando">
                <div className="ayudandoText">
                    <h2>AYUDANDO AL MUNDO DE LA MANO DE LOS JOVENES</h2>
                    <p>
                        Nuestra solución educativa tiene como objetivo empoderar
                        a los jóvenes para que aprendan, exploren y tomen
                        conciencia sobre la calidad del agua en su ciudad.Los
                        estudiantes podrán registrar datos de muestras de agua,
                        visualizarlos en un formato fácil de entender y acceder
                        a información educativa sobre contaminantes comunes y
                        cómo afectan la salud humana.{" "}
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
                    <p>
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis ducimus obcaecati voluptatem voluptate, placeat
                        facere cum maiores quo quibusdam officia temporibus
                        dolorem a laudantium velit, odit autem ratione assumenda
                        dolore.
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
