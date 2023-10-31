import "./ux.scss";
import PageContext from "../../context/pageContext";
import { useContext, useEffect } from "react";

const Ux = () => {
    const { page, setPage } = useContext(PageContext);

    useEffect(() => {
        setPage("ux");
    }, [page, setPage]);

    return (
        <main className="uxMain">
            <div className="profileSection">
                <h1>UX/UI CASE STUDY</h1>
                <section className="intro">
                    <article>
                        <h3>Equipo UX/UI Product Designer</h3>
                        <p>
                            ¡Hola! somos el equipo de diseño UX/UI. Venimos de
                            diferentes universidades, profesiones y lugares pero
                            tenemos algo en común, el buen rollo y una pasión
                            clara por el diseño UX/UI. Somos un equipo que hemos
                            trabajado en este proyecto con compromiso y mucho
                            esfuerzo.
                        </p>
                        <p>
                            A pesar de tener un plazo de tiempo limitado de dos
                            semanas, durante las cuales experimentamos un
                            período de mayor intensidad de trabajo de alrededor
                            de 4 días en promedio, logramos desarrollar un
                            producto del que podemos sentirnos orgullosos y que
                            cumplió con éxito las necesidades del proyecto.
                        </p>
                    </article>
                    <article>
                        <h3>Nuestro rol en el proyecto</h3>
                        <p>
                            En el proyecto que mencionamos, nuestro equipo de
                            diseño UX/UI desempeñó un papel fundamental.
                            Comenzamos por entender las necesidades de los
                            usuarios a través de entrevistas y empatía, y luego
                            definimos claramente el problema y establecimos
                            objetivos específicos. Generamos ideas creativas,
                            diseñamos prototipos y realizamos pruebas de
                            usabilidad para mejorar nuestros diseños. En
                            resumen, nuestro enfoque se centró en garantizar que
                            la plataforma educativa fuera intuitiva y atractiva,
                            cumpliendo así nuestro objetivo de empoderar a los
                            jóvenes para tomar medidas responsables y
                            concienciarse sobre la calidad del agua en la
                            comunidad de Bilbao.
                        </p>
                    </article>
                </section>
                <section className="perfiles">
                    <div className="irati profile">
                        <img
                            src="./static/perfiles/irati.png"
                            alt="Irati"
                            className="profileImg animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/irati-lozano-segovia/")
                            }
                        />
                        <p>Irati Lozano Segovia</p>
                        <h3>UX/UI Product Designer</h3>
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo"
                            className="animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/irati-lozano-segovia/")
                            }
                        />
                    </div>
                    <div className="sebas profile">
                        <img
                            src="./static/perfiles/sebastian.png"
                            alt="Sebastian"
                            className="profileImg animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/sebastianrgv")
                            }
                        />
                        <p>Sebastián Reina</p>
                        <h3>UX/UI Product Designer</h3>
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo"
                            className="animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/sebastianrgv")
                            }
                        />
                    </div>
                    <div className="oscar profile">
                        <img
                            src="./static/perfiles/oscar.png"
                            alt="Oscar"
                            className="profileImg animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/oscar-ciencia/")
                            }
                        />
                        <p>Oscar Ciencia</p>
                        <h3>UX/UI Product Designer</h3>
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo "
                            className="animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/oscar-ciencia/")
                            }
                        />
                    </div>
                </section>
            </div>
            <section className="designThinking">
                <div className="designDescription">
                    <h2>DESING THINKING</h2>
                    <p>
                        Como diseñadores UX/UI decidimos usar el proceso Design
                        Thinking para resolver el desafío propuesto sobre la
                        calidad del agua en Bilbao de la siguiente manera:
                    </p>
                    <ol>
                        <li>
                            Empatizar: Comenzamos por{" "}
                            <b>entender las necesidades y deseos</b> de los
                            usuarios, incluyendo estudiantes, profesores y
                            autoridades locales.
                        </li>
                        <li>
                            Definir: Utilizamos la información recopilada para
                            <b>
                                definir el problema y establecer objetivos
                                claros
                            </b>
                            para nuestra solución.
                        </li>
                        <li>
                            Idear: Generamos una amplia{" "}
                            <b>variedad de ideas creativas</b> para abordar el
                            problema.
                        </li>
                        <li>
                            Prototipar: Diseñamos <b>prototipos de baja</b>{" "}
                            fidelidad para probar esas ideas con usuarios
                            reales.
                        </li>
                        <li>
                            Testear: Probamos los prototipos para evaluar su
                            eficacia y usabilidad.
                        </li>
                    </ol>
                </div>
                <div className="designImgContainer">
                    <img
                        src="./static/ux-ui/design.png"
                        alt="Design thinking"
                    />
                </div>
            </section>
            <section className="problems routeHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DISEÑO UX/UI PRODUCT DESIGN</p>
                    </div>
                </section>
                <section className="problemsDescription routeHeaderDescription">
                    <h3>DEFINIR EL PROBLEMA</h3>
                    <p>
                        Nuestro principal enfoque en el proyecto fue abordar el
                        desafío de empoderar a los jóvenes para que se
                        conviertan en defensores de la calidad del agua en su
                        comunidad. Comprendimos la necesidad de crear una
                        solución educativa que permitiera a los estudiantes
                        aprender, explorar y concienciarse sobre este tema
                        crítico.
                    </p>
                </section>
            </section>
            <section className="problemsPoints">
                <section className="problemsPointsFirst">
                    <article className="challenge">
                        <h4>Reto</h4>
                        <p>
                            ¿Cómo podemos enseñar e informar sobre la calidad
                            del agua mediante una plataforma educativa?
                        </p>
                    </article>
                    <article className="proposal">
                        <h4>Propuesta de valor</h4>
                        <p>
                            Nuestra solución educativa empoderamos a jóvenes
                            para que aprendan y tomen conciencia sobre la
                            calidad del agua en su ciudad. A través de una
                            aplicación móvil y sitio web, registran datos de
                            muestras de agua y acceden a información educativa
                            sobre contaminantes y su impacto en la salud humana.
                            Involucrar a los jóvenes en la toma de muestras y
                            análisis de datos les capacita para proteger la
                            calidad del agua en su comunidad.
                        </p>
                    </article>
                </section>
                <article className="responsability">
                    <h4>Nuestras responsabilidades</h4>
                    <p>
                        En conjunto, estas herramientas de investigación nos
                        proporcionaron una base sólida para definir el problema
                        de manera efectiva, identificar oportunidades de diseño
                        y asegurarnos de que nuestra solución estuviera
                        perfectamente alineada con las necesidades de los
                        jóvenes y la comunidad en Bilbao.
                    </p>
                    <ul>
                        <li>Investigar al usuario y sus necesidades.</li>
                        <li>
                            Diseñar la arquitectura de la información, la
                            navegación y la estructura de la web app para
                            garantizar una experiencia de usuario intuitiva y
                            eficiente.{" "}
                        </li>
                        <li>
                            Crear un diseño de interfaz atractiva y funcional.{" "}
                        </li>
                        <li>
                            Optimizar que el producto sea fácil de usar para
                            todos los usuarios.
                        </li>
                    </ul>
                </article>
            </section>
            <section className="research routeHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DISEÑO UX/UI PRODUCT DESIGN</p>
                    </div>
                </section>
                <section className="researchDescription routeHeaderDescription">
                    <h3>INVESTIGACIÓN</h3>
                    <p>
                        A través de un enfoque riguroso, diseñamos una solución
                        que empodera a los jóvenes en Bilbao para abordar la
                        calidad del agua en su comunidad. A continuación,
                        destacamos las herramientas de investigación utilizadas
                        y los valiosos conocimientos obtenidos a través de
                        ellas.
                    </p>
                </section>
            </section>
            <section className="researchPoints">
                <article className="researchPointsFirst">
                    <article className="idealUser">
                        <h4>Usuario ideal</h4>
                        <div className="stats">
                            <p>
                                <b>Edad:</b> 35 años
                            </p>
                            <p>
                                <b>Genero:</b> Masculino
                            </p>
                            <p>
                                <b>Profesión</b> Profesor de ciencias, ESO
                            </p>
                        </div>
                        <ul>
                            <li>
                                Desea encontrar nuevas formas de enseñar ciencia
                                que sean más atractivas y prácticas para los
                                estudiantes.
                            </li>
                            <li>
                                Siente que los estudiantes a veces tienen
                                dificultades para comprender conceptos
                                científicos abstractos.
                            </li>
                        </ul>
                    </article>
                    <article className="interviews researchPointsdescription">
                        <h4>Entrevistas</h4>
                        <p>
                            Esta herramienta nos proporcionó una comprensión
                            enriquecida de las experiencias de los usuarios y
                            nos ayudó a definir claramente el desafío que
                            estábamos abordando. Las entrevistas no solo
                            generaron datos valiosos, sino que también nos
                            permitieron captar la voz y las emociones de
                            nuestros usuarios, lo que influyó significativamente
                            en el diseño de la solución.
                        </p>
                    </article>
                </article>
                <article className="researchPointsSecond ">
                    <article className="actorMap researchPointsdescription">
                        <h4>Mapa de actores</h4>
                        <p>
                            Al identificar a los interesados, desde estudiantes
                            y profesores hasta expertos en agua, pudimos
                            comprender cómo interactuaban y qué roles
                            desempeñaban en la calidad del agua en Bilbao.
                        </p>
                    </article>
                    <article className="journeyMap researchPointsdescription">
                        <h4>Journey Map</h4>
                        <p>
                            Fue esencial para diseñar una interfaz de usuario
                            que fuera intuitiva, accesible y atractiva. El
                            journey map también sirvió como una guía constante a
                            lo largo del proyecto, ayudándonos a mantener el
                            enfoque en las necesidades y expectativas de
                            nuestros usuarios.
                        </p>
                    </article>
                </article>
            </section>
            <section className="design routeHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DISEÑO UX/UI PRODUCT DESIGN</p>
                    </div>
                </section>
                <section className="researchDescription routeHeaderDescription">
                    <h3>DISEÑO</h3>
                    <p>
                        En esta fase nos centramos en crear la apariencia visual
                        y la disposición de los elementos en una Webapp, con el
                        objetivo de proporcionar una experiencia de usuario
                        intuitiva y atractiva.
                    </p>
                </section>
            </section>
            <section className="prototype">
                <article className="prototypeDescription">
                    <h4>Prototipo en baja</h4>
                    <p>
                        El prototipo en baja es una representación simplificada
                        de una interfaz que sirve para explorar ideas, obtener
                        retroalimentación temprana, comunicar conceptos y
                        ahorrar recursos. Estos prototipos se enfocan en la
                        estructura y funcionalidad, lo que permite iterar
                        rápidamente en el diseño sin preocuparse por detalles
                        visuales, facilitando la toma de decisiones efectivas en
                        las etapas iniciales del proceso de diseño.
                    </p>
                </article>
                <div className="prototypeimg">
                    <img
                        src="./static/ux-ui/prototipado.png"
                        alt="prototipado"
                    />
                </div>
            </section>
            <section className="prototypeDesign routeHeader">
                <section className="prototypeDesignDescription routeHeaderDescription">
                    <h3>Diseño del prototipo</h3>
                </section>
            </section>
            <section className="mobileRepresentation">
                <div className="mobileImg">
                    <img src="/static/ux-ui/movil2.png" alt="movil2" />
                </div>
                <div className="mobileImg">
                    <img src="./static/ux-ui/movil1.png" alt="movil1" />
                </div>
            </section>
            <section className="typography routeHeader">
                <section className="typographyDescription routeHeaderDescription">
                    <h3>Tipografía y color</h3>
                </section>
            </section>
            <section className="typographyPoints">
                <article className="typographyPointsFirst">
                    <article className="typographyPointsdescription">
                        <h4>Tipografía</h4>
                        <p>
                            La elección de la fuente tipográfica Poppins la
                            elegimos por legibilidad en pantallas, estilo
                            moderno y amigable que atrae a un público amplio,
                            versatilidad en pesos y estilos para una jerarquía
                            visual efectiva, su capacidad para admitir
                            caracteres internacionales y su accesibilidad al ser
                            una fuente de código abierto gratuita, todo lo cual
                            contribuye a una presentación atractiva y efectiva
                            del mensaje sobre la importancia del agua.
                        </p>
                    </article>
                    <article className="typographyPointsdescription">
                        <h4>Color</h4>
                        <p>
                            La elección del color fue de la identidad
                            corporativa. Esta identidad corporativa incluye
                            elementos como el logotipo, los colores
                            corporativos, la tipografía, el tono de
                            comunicación, los valores de la empresa y su
                            cultura, etc.
                        </p>
                    </article>
                    <article className="typographyPointsImages">
                        <div className="typographyPointsImages">
                            <img
                                src="./static/ux-ui/colores.png"
                                alt="colors"
                            />
                        </div>
                        <div className="typographyPointsImages logotext">
                            <p>Logo</p>
                            <img src="./static/ux-ui/logo-ux.png" alt="logo" />
                        </div>
                    </article>
                </article>
                <article className="typographyPointsSecond">
                    <div className="typographyPointsType">
                        <p>POPPINS</p>
                    </div>
                    <div className="typographyPointsTitle">
                        <p>Titulo 1</p>
                        <p>Titulo 2</p>
                    </div>
                    <div className="typographyPointsSubtitle">
                        <p>Subtitulo 1</p>
                        <p>Subtitulo 2</p>
                    </div>
                    <div className="typographyPointsBody">
                        <p>Body 1</p>
                        <p>Body 2</p>
                    </div>
                    <div>
                        <p>Boton</p>
                    </div>
                    <div>
                        <p>Titulares</p>
                    </div>
                    <div>
                        <p>Overline</p>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Ux;
