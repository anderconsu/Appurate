import "./landing.scss";
import PageContext from "../../context/pageContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    const { page, setPage } = useContext(PageContext);

    useEffect(() => {
        setPage("landing");
    }, [page, setPage]);

    return (
        <main className="landingMain">
            <section className="grisLanding">
                <h1>APPÚRATE.ORG</h1>
                <p>
                    El viernes 15 de septiembre, tuvo lugar la reunión y
                    presentación del desafío en colaboración con{" "}
                    <strong>AQUADAT</strong>. Durante este encuentro, se nos
                    brindó una detallada exposición del desafío en cuestión, así
                    como se delinearon los objetivos a alcanzar.
                </p>
            </section>
            <section className="blancoLanding">
                <section className="columna1Landing">
                    <article className="estrategia">
                        <h3>
                            ESTRATEGIA, CREATIVIDAD Y VIABILIDAD DEL PROYECTO
                        </h3>
                        <p>
                            Después de un fin de semana de intensa investigación
                            por parte de los tres equipos (FullStack, UX/UI y
                            Data), el lunes 18 de septiembre, se llevaron a cabo
                            las exposiciones que abordaron las investigaciones
                            realizadas y las posibles soluciones creativas y
                            tecnológicas relacionadas con el desafío planteado
                            por Aquadat.
                        </p>
                    </article>
                    <div>
                        <img
                            src="./static/landing/fotoClase1.png"
                            alt="fotoClase1"
                            className="fotoClase1"
                        />
                    </div>
                    <div className="alfinal">
                        <h3>
                            AL FINAL DEL ARTÍCULO PUEDES VER QUÉ ROL LE TOCÓ A
                            CADA EQUIPO Y QUÉ IMPACTO TUVO ESTO EN EL PROYECTO:
                        </h3>
                        <p>Si deseas verlo ya, pincha en estos iconos.</p>
                        <div className="iconos">
                            <img
                                src="./static/landing/iconos.png"
                                alt="iconos"
                                className="iconos"
                            />
                        </div>
                    </div>
                </section>
                <section className="columna2Landing">
                    <div>
                        <img
                            src="./static/landing/briefing.png"
                            alt="brie fing"
                            className="brifing"
                        />
                    </div>
                    <div className="investigaciones">
                        <h2>
                            Estas investigaciones y presentaciones llevaron a la
                            siguiente serie de conclusiones:
                        </h2>
                        <ol>
                            <li>
                                <strong>Falta de Data:</strong> Se identificó una carencia
                                significativa de datos, lo que representa un
                                obstáculo importante para comprender y abordar de
                                manera efectiva la problemática del agua.
                            </li> 
                            <li>
                                <strong>Necesidad
                                de Implicación de la Sociedad:</strong> Se destacó la
                                necesidad de involucrar a la sociedad en la
                                problemática del agua, reconociendo que la
                                participación y la concienciación de la comunidad
                                son esenciales para abordar este desafío de manera
                                integral.
                            </li>
                            <li>
                                <strong>Concienciación de las Nuevas Generaciones: </strong>
                                Se subrayó la importancia de sensibilizar a las
                                generaciones más jóvenes sobre esta problemática, ya
                                que representan el futuro y pueden desempeñar un
                                papel fundamental en la promoción de soluciones
                                sostenibles.
                            </li>
                            
                             
                         </ol>
                         <p>
                            Estas conclusiones son fundamentales
                            para orientar nuestras acciones y estrategias
                            futuras en el contexto de este desafío crucial
                            propuesto por Aquadat.
                         </p>
                    </div>
                </section>
            </section>
            <div className="gris2Landing">
                <h2>A partir de ese punto.</h2>
                <p>
                    Nuestro objetivo principal fue desarrollar una <strong>solución
                    dinámica y educativa</strong>. Tras haber definido claramente el
                    problema, fuimos capaces de identificar rápidamente una
                    solución que <strong>involucraría a las generaciones más jóvenes</strong>,
                    proporcionando un feedback valioso y necesario.
                </p>
            </div>
            <div className="blanco2landing">
                <div>
                    <p>
                        Cuando se planteó la creación de una plataforma
                        educativa en la que los estudiantes no solo formarían
                        parte activa del proceso de aprendizaje, sino que
                        también serían actores fundamentales en la toma y
                        análisis de muestras, se consideró la necesidad de
                        diseñar una aplicación web que permitiera su uso tanto
                        en versiones web y tablet, especialmente para el
                        aprendizaje en el aula mediante proyectores o pantallas.
                    </p>
                    <p>
                        No obstante, también se reconoció la importancia de
                        contar con una versión móvil, que permitiera la
                        introducción de datos en el lugar de recogida y la
                        rápida visualización de los resultados. Esta versión
                        móvil se concibió para garantizar que cualquier persona
                        interesada en conocer la calidad del agua de la Ría de
                        Bilbao pudiera acceder de manera sencilla y práctica a
                        la información relevante, sin importar su ubicación o
                        dispositivo de preferencia. De esta manera, se buscó
                        hacer que la plataforma fuera accesible y efectiva para
                        todos los usuarios interesados en el estado del agua en
                        la Ría.
                    </p>
                    <div>
                        <img
                            src="./static/landing/app.png"
                            alt="app"
                            className="app"
                        />
                    </div>
                </div>

                <div className="disenoSitemap">
                    <h4>
                        Luego de estas consideraciones, nos adentramos en el
                        diseño del sitemap, donde identificamos tres componentes
                        fundamentales o bloques clave para la webapp.
                    </h4>
                </div>

                <div className="orden">
                    <div className="unoDos">
                        <div className="uno">
                            <div className="imagenNumero">
                                <img
                                    src="./static/landing/uno.png"
                                    alt="uno"
                                    className="uno"
                                />
                            </div>
                            <p>
                                El primer bloque se enfoca en la parte pública y
                                visible de la plataforma. Aquí se incluirá un
                                mapa accesible para todos los usuarios, que les
                                permitirá identificar los puntos en la Ría donde
                                se pueden llevar a cabo actividades
                                sociodeportivas, gracias a las recomendaciones
                                de calidad del agua. Además, en esta sección,
                                los visitantes podrán obtener información
                                adicional sobre el proyecto y conocer a los
                                participantes involucrados.
                            </p>
                        </div>
                        <div className="dos">
                            <div className="imagenNumero">
                                <img
                                    src="./static/landing/dos.png"
                                    alt="dos"
                                    className="dos"
                                />
                            </div>
                            <p>
                                El segundo bloque principal se centra en la
                                aplicación privada, diseñada específicamente
                                para tutores y alumnos. Esta área servirá como
                                un espacio de aprendizaje relacionado con el
                                agua y permitirá la introducción de datos de las
                                muestras recopiladas.
                            </p>
                        </div>
                    </div>

                    <div className="tres">
                        <div className="tresTres">
                            <div className="imagenNumero">
                                <img
                                    src="./static/landing/tres.png"
                                    alt="tres"
                                    className="tresTresTres"
                                />
                            </div>
                            <div className="imagenMapa">
                                <img
                                    src="./static/landing/mapa.png"
                                    alt="mapa"
                                    className="mapa"
                                />
                            </div>
                            <p>
                                El tercer bloque aborda el espacio privado
                                destinado a los técnicos de la aplicación. Su
                                función será dar de alta a los profesores y
                                tutores de los colegios en el sistema.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="buttonWeb">
                    <button>
                        <Link to="/">Descubre la web</Link>
                    </button>
                </div>
            </div>
            <div className="gris3landing">
                <div className="azul">
                    <h2>
                        A continuación te mostramos el trabajo hecho por cada
                        parte del equipo:
                    </h2>
                    <div className="bewaters">
                        <h3>BEWATERS</h3>
                        <div>
                            <img
                                src="./static/landing/grupo.png"
                                alt="grupo"
                                className="grupo"
                            />
                        </div>
                    </div>
                    <div className="equipo">
                        <h4>EL EQUIPO</h4>
                        <p>
                            Somos Bewaters, un equipo compuesto por ocho
                            apasionados individuos que nos unimos con un
                            objetivo común: abordar la problemática del agua en
                            la Ría de Bilbao y llenar los vacíos de datos
                            relacionados con esta importante cuestión.
                        </p>
                        <ul>
                            <li>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Sapiente ab ipsa perferendis
                                iure ad corrupti sequi quo corporis.
                                Repellendus, cumque.
                            </li>

                            <li>
                                Laborum delectus repudiandae facilis commodi
                                veniam repellat. Quisquam, voluptas debitis.
                            </li>
                            <li>
                                Laboriosam, quis magnam? Quosque tandem abutere
                                patientiam nostram, Catilina?
                            </li>
                        </ul>
                    </div>
                    <div className="containerIconos">
                        <img
                            src="./static/landing/iconos.png"
                            alt="iconos"
                            className="iconos"
                        />
                    </div>
                </div>
            </div>
            <div className="buttonPa">
                <button>
                    <Link to="/">Pincha aquí:</Link>
                </button>
            </div>
        </main>
    );
};

export default Landing;
