import "./dataScience.scss";
import PageContext from "../../context/pageContext";
import { useContext, useEffect } from "react";

const DataScience = () => {
    const { page, setPage } = useContext(PageContext);

    useEffect(() => {
        setPage("data");
    }, [page, setPage]);

    return (
        <main className="dataMain">
            <div className="profileSection">
                <h1>DATA SCIENCE</h1>
                <section className="intro">
                    <article>
                        <h3>Equipo Data Science</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Senectus
                            fames duis adipiscing molestie. Urna amet dui
                            rhoncus fringilla facilisis semper aliquam. Magna
                            bibendum magnis sed auctor sed pharetra. Ultrices
                            montes id pellentesque dignissim rhoncus viverra nam
                            magna. Arcu tellus viverra tempor mauris. Quam
                            tristique venenatis lorem donec senectus nisi nec
                            nunc. Quis interdum id nunc laoreet ut turpis.
                            Tristique tellus nibh ut et enim augue. Suspendisse
                            dolor at massa lobortis nisi dictum consectetur
                            posuere phasellus.
                        </p>
                    </article>
                    <article>
                        <h3>Nuestro rol en el proyecto</h3>
                        <p>
                            En el proyecto, nosotros, el equipo de datos,
                            desempeñamos un papel crucial al investigar y
                            abordar la problemática de determinar la viabilidad
                            de las aguas para el baño. Realizamos una
                            investigación exhaustiva para comprender las
                            variables clave involucradas y buscamos fuentes de
                            datos en línea, consultamos a expertos y
                            consideramos diversas opciones para la recopilación
                            de datos. Ante la falta de datos suficientes y
                            confiables, optamos por la creación de datos
                            sintéticos utilizando programación en Python,
                            asegurando la calidad y equilibrio de la
                            información. Posteriormente, entrenamos un modelo de
                            machine learning, identificando el modelo de Random
                            Forest Classifier como el más adecuado, y
                            colaboramos con otros equipos para integrar esta
                            solución en el proyecto final, permitiendo a los
                            usuarios determinar la viabilidad del agua para el
                            baño mediante la introducción de datos de variables
                            específicas.
                        </p>
                    </article>
                </section>
                <section className="perfiles">
                    <div className="alejo profile">
                        <img
                            src="./static/perfiles/alejo.png"
                            alt="Alejo"
                            className="profileImg animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/alejosotillo/")
                            }
                        />
                        <p>Alejandro Sotillo</p>
                        <h3>Científico de Datos</h3>
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo"
                            className="animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/alejosotillo/")
                            }
                        />
                        <img
                            src="./static/githubLogo.png"
                            alt="githubLogo"
                            className="animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://github.com/socho8")
                            }
                        />
                    </div>
                    <div className="leo profile">
                        <img
                            src="./static/perfiles/leo.png"
                            alt="Leonor"
                            className="profileImg animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/leonor-rodman/")
                            }
                        />
                        <p>Leonor Rodriguez</p>
                        <h3>Científico de Datos</h3>
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo"
                            className="animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/leonor-rodman/")
                            }
                        />
                        <img
                            src="./static/githubLogo.png"
                            alt="githubLogo"
                            className="animatedSelect"
                            onClick={() =>
                                (window.location.href =
                                    "https://github.com/Leoorodrii")
                            }
                        />
                    </div>
                </section>
            </div>
            <section className="routeHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DATA SCIENCE</p>
                    </div>
                </section>
                <section className="routeHeaderDescription">
                    <h3>ESTUDIO DEL PROBLEMA A TRATAR</h3>
                </section>
            </section>
            <section className="problemStudy">
                <p>
                    Con el equipo de data lo primero que hicimos fue informarnos
                    bien sobre la problemática, aprender cuales son las
                    variables necesarias para determinar si un agua es viable o
                    no para el baño y entre que parámetros se mueven cada uno.
                    Para ello buscamos información en línea, hablamos con
                    biólogos, profesores y diferentes empresas para obtener los
                    conocimientos necesarios antes de empezar con el proceso de
                    búsqueda de datos.
                </p>
            </section>
            <section className="routeHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DATA SCIENCE</p>
                    </div>
                </section>
                <section className="routeHeaderDescription">
                    <h3>RECOLECCION DE LA DATA</h3>
                </section>
            </section>
            <section className="dataRecolection">
                <p>
                    En este proceso hicimos una intensa busqueda de data en
                    diferentes website de del Gobierno Vasco y de institutos.
                    Intentamos hacer webscrapping como también buscamos data en
                    kaggle. Nos informamos con diferentes profesionales para ver
                    de donde podíamos sacar data completa y fiable. Al finalizar
                    este proceso llegamos a la conclusión de que no había la
                    data necesaria, suficiente y de calidad para ser estudiada,
                    sumado a que la poca que había o no era publica o era muy
                    escasa.
                </p>
                <div className="recImgContainer">
                    <img
                        src="./static/dataScience/dataRecolection.png"
                        alt="Data recolection"
                    />
                </div>
            </section>
            <section className="routeHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DATA SCIENCE</p>
                    </div>
                </section>
                <section className="routeHeaderDescription">
                    <h3>CREACION DE DATA SINTETICA</h3>
                </section>
            </section>
            <section className="dataCreation">
                <p>
                    Ya que en el anterior punto pudimos determinar que los datos
                    no eran los suficientes ni tampoco eran muy seguidos en el
                    tiempo, optamos por la creación de data sintetica. En este
                    proceso utilizamos el lenguaje de programación Python para
                    crear un bucle donde nos devuelva un dataset con la cantidad
                    de datos suficientes, utilizando las variables necesarias y
                    sus valores normales para no tener errores en el
                    entrenamiento del modelo. Tambien logramos balancear nuestra
                    data asi el 50 por ciento de la misma sea no apta para el
                    baño y el 50 por ciento restantes si para que a la hora de
                    entrenar nuestro modelo este no sufra de overfitting o
                    underfitting.
                </p>
                <div className="recImgContainer">
                    <img
                        src="./static/dataScience/dataCreation.png"
                        alt="Data creation"
                    />
                </div>
            </section>
            <section className="routeHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DATA SCIENCE</p>
                    </div>
                </section>
                <section className="routeHeaderDescription">
                    <h3>ENTRENAMIENTO DEL MODELO</h3>
                </section>
            </section>
            <section className="dataTraining">
                <p>
                    Ya con nuestro dataset creado y balanceado procedimos al
                    entrenamiento del modelo de machine learning. Probamos y
                    entrenamos nuestra data con varios modelos de clasificación
                    donde mediante la obtención de la precisión de cada uno
                    pudimos determinar que el mas fiable era el modelo de Random
                    Forest Classifier. Asi guardamos el modelo entrenado y junto
                    con el equipo de Full Stack y el equipo de UX/UI logramos
                    enlazarlo con todo el proyecto para que a la hora de que los
                    alumnos introduzcan los datos de cada variable puedan
                    predecir o determinar si un agua es viable o no par el baño
                </p>
                <div className="recImgContainer">
                    <img
                        src="./static/dataScience/dataTraining.png"
                        alt="Data training"
                    />
                </div>
            </section>
        </main>
    );
};

export default DataScience;
