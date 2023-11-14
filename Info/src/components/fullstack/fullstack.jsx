import "./fullstack.scss";
import { useContext, useEffect } from "react";
import PageContext from "../../context/pageContext";
const Fullstack = () => {
    const { page, setPage } = useContext(PageContext);

    useEffect(() => {
        setPage("fs");
    }, [page, setPage]);

    return (
        <main className="fsMain">
            <h1 className="cabeceraSeccion">FULL STACK</h1>
            <section className="intro">
                <article>
                    <div className="textoIntroUno">
                        <h3 className="titulosCeleste">Equipo Desarrollo Full Stack</h3>

                        <p className="parrafoNormal black">
                            ¡Buenas! Somos el equipo de desarrollo de Full
                            Stack. Aunque nuestra procedencia profesional sea
                            tan diferente, somos un equipo con muchas cosas en
                            común. La pasión por la programación, la
                            creatividad, la curiosidad, la música y todo lo que
                            tenga que ver con el mundo de la tecnología y la
                            red. Tenemos conocimientos varios y experiencias
                            diversas en el mundo laboral; la logística, el
                            márketing, la gestión de proyectos... Hemos
                            disfrutado mucho durante este reto, el cuál nos ha
                            servido también para aprender más sobre el agua y
                            nos ha dejado con unas ganas tremendas de
                            adentrarnos más aún en él.
                        </p>
                    </div>
                </article>
                <article>
                    <div className="textoIntroDos">
                        <h3 className="titulosCeleste">Nuestro rol en el proyecto</h3>
                        <p className="parrafoNormal black">
                            Nuestro rol como desarrolladores en este proyecto ha
                            abarcado tanto el desarrollo del frontend como del
                            backend, incluyendo la implementación de componentes
                            dinámicos, la gestión de la base de datos, la
                            seguridad de las credenciales de usuario y el
                            despliegue de la aplicación. Nuestra labor es
                            esencial para garantizar que la plataforma sea
                            segura, eficiente y cumpla con los objetivos de
                            educación y concienciación sobre el agua en la
                            comunidad. Además, colaboramos en un entorno de
                            control de versiones utilizando GitHub para mantener
                            un registro detallado de los cambios y garantizar la
                            calidad del código.
                        </p>
                    </div>
                </article>
            </section>
            <section className="perfiles">
                <div className="ander profile">
                    <img
                        src="./static/perfiles/ander.png"
                        alt="Ander"
                        className="profileImg animatedSelect"
                        onClick={() => {window.open("https://cloudconsu.com/")}}

                    />
                    <p className ="parrafosOscuros bold">Ander Consuegra</p>
                    <h3 className="parrafoNormal">Full Stack developer</h3>
                    <a
                        href="https://www.linkedin.com/in/anderconsu"
                        className="animatedSelect"
                    >
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo"
                        />
                    </a>
                    <a
                        href="https://github.com/anderconsu"
                        className="animatedSelect"
                    >
                        <img
                            src="../../static/githubLogo.png"
                            alt="logo Git Hub"
                        />
                    </a>
                </div>
                <div className="nacho profile">
                    <img
                        src="./static/perfiles/nacho.png"
                        alt="Nacho"
                        className="profileImg animatedSelect"
                        onClick={() => {window.open("https://www.linkedin.com/in/nachoprado/")}}
                    />
                    <p className ="parrafosOscuros bold">Nacho Prado</p>
                    <h3 className="parrafoNormal">Full Stack developer</h3>

                    <a
                        href="https://www.linkedin.com/in/nachoprado"
                        className="animatedSelect"
                    >
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo"
                        />
                    </a>
                    <a
                        href="https://github.com/nachoprado86"
                        className="animatedSelect"
                    >
                        <img
                            src="../../static/githubLogo.png"
                            alt="logo Git Hub"
                        />
                    </a>
                </div>
                <div className="endika profile">
                    <img
                        src="./static/perfiles/endika.png"
                        alt="Endika"
                        className="profileImg animatedSelect"
                        onClick={() => {window.open("https://portfolio-endika.vercel.app/")}}
                    />
                    <p className ="parrafosOscuros bold">Endika Acedo</p>
                    <h3 className="parrafoNormal">Full Stack developer</h3>

                    <a
                        href="https://www.linkedin.com/in/endika-acedo-gonz%C3%A1lez-432a1828b"
                        className="animatedSelect"
                    >
                        <img
                            src="./static/linkedinLogo.png"
                            alt="linkedinLogo"
                        />
                    </a>
                    <a
                        href="https://github.com/Endika7593"
                        className="animatedSelect"
                    >
                        <img
                            src="../../static/githubLogo.png"
                            alt="logo Git Hub"
                        />
                    </a>
                </div>
            </section>
            <section className="diseno">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DESARROLLO FULL STACK</p>
                    </div>
                </section>
                <div className="disenoDescription">
                    <div className="tituloDiseno">
                        <h2 className="cabeceraSeccion">DISEÑO Y SITEMAPS JUNTO A UX/UI</h2>
                        <span className="fyS parrafoNormal gray">Figma y pizarra</span>
                    </div>

                    <div className="disenoTexto">
                        <p className="parrafoNormal">
                            En colaboración con el equipo de UX/UI, se diseñaron
                            las páginas teniendo en cuenta toda la información
                            que se mostrará en cada una y se planificaron los
                            call to action (llamadas a la acción) que guiarán a
                            los usuarios. Se abordó este proceso con una
                            mentalidad estratégica y viable, siempre teniendo en
                            cuenta el tiempo limitado disponible para completar
                            el proyecto, que en este caso, se estableció en dos
                            semanas.
                        </p>
                    </div>
                </div>
            </section>
            <section className="front RouteHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DESARROLLO FULL STACK</p>
                    </div>
                </section>
                <div className="tituloFront">
                    <h2 className="cabeceraSeccion">FRONT</h2>
                </div>
                <section className="frontDescription">
                    <div className="textoUno parrafoNormal">
                        <p>
                            En cuanto al aspecto visual y el estilizado, optamos
                            por SASS y CSS. Esto nos permitió dotar a la webapp
                            de un aspecto atractivo y coherente de manera
                            sencilla, garantizando así una experiencia de
                            usuario agradable y atractiva en todos los aspectos.
                        </p>
                        <p>
                            En todo momento, se implementó una estrategia
                            centrada en dispositivos móviles (Mobile First) y
                            diseño adaptable (Responsive). Se utilizaron
                            consultas de medios (Media Queries) para asegurar
                            una adaptación eficiente en diversas resoluciones de
                            pantalla.
                        </p>
                    </div>

                    <div className="elRow">
                        <div className="textoDos parrafoNormal">
                            <p>
                                Para facilitar el proceso de registro de
                                usuarios, hemos implementado un portal de acceso
                                destinado a las organizaciones colaboradoras.
                                Este enfoque permite que los usuarios
                                interesados establezcan contacto a través de un
                                formulario designado, tras lo cual los
                                responsables de la organización se encargan de
                                gestionar su registro y proporcionarles las
                                credenciales de acceso correspondientes. Esta
                                metodología asegura un proceso eficiente y
                                controlado para la incorporación de nuevos
                                usuarios a nuestra plataforma.
                            </p>
                            <p>
                                {" "}
                                Para asegurar la privacidad y la seguridad de
                                los datos, es importante destacar que el acceso
                                a la parte privada de nuestra plataforma solo
                                está habilitado una vez que los usuarios han
                                completado exitosamente el proceso de inicio de
                                sesión. Esto garantiza que solo aquellos con
                                credenciales válidas y autorización adecuada
                                puedan acceder a la información y los recursos
                                reservados para usuarios registrados.
                            </p>
                            <p>
                                Las coordenadas de los puntos de recogida de
                                aguas se mantienen en una lista altamente
                                adaptable, lo que permite una escalabilidad
                                eficiente y una rápida incorporación de nuevos
                                puntos, si es necesario. Esta flexibilidad en la
                                gestión de datos asegura que podamos responder
                                ágilmente a las demandas cambiantes y a la
                                expansión de nuestra red de puntos de recogida
                                de aguas sin complicaciones significativas.
                            </p>
                        </div>

                        <div className="textoConFoto parrafoNormal">
                            <p>
                                Decidimos no guardar ningún tipo de contraseña
                                en el almacenamiento local del navegador por
                                motivos de seguridad, con lo que solo se guarda
                                información básica y un token de autenticación,
                                el cual se explicará más adelante. Por razones
                                de seguridad, hemos adoptado la decisión de no
                                almacenar ningún tipo de contraseña en el
                                almacenamiento local del navegador. En su lugar,
                                mantenemos información básica y un token de
                                autenticación, el cual se describirá
                                detalladamente en una sección posterior. Esta
                                medida protege de manera efectiva las
                                credenciales de nuestros usuarios, garantizando
                                la confidencialidad de sus datos y contribuyendo
                                a mantener un entorno seguro en nuestra
                                plataforma.
                            </p>

                            <img
                                src="../../static/fullstack/equipofs.jpeg"
                                alt="Equipo de Full Stack"
                                className="fotoFullstack"
                            />
                        </div>
                    </div>
                </section>
            </section>

            <section className="back RouteHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DESARROLLO FULL STACK</p>
                    </div>
                </section>
                <div className="tituloBack">
                    <h2 className="cabeceraSeccion">BACK</h2>
                </div>
                <section className="backDescription parrafoNormal">
                    <div className="textoUno">
                        <p>
                            En lo que respecta al desarrollo del backend, hemos
                            optado por Node.js y el framework Express para crear
                            una infraestructura sólida para la parte del
                            servidor. Node.js nos permite ejecutar JavaScript en
                            el servidor, lo que facilita en gran medida el
                            desarrollo y la organización de la estructura.
                            Express, por su parte, proporciona un marco de
                            trabajo minimalista y altamente flexible.
                        </p>
                    </div>

                    <div className="elRow">
                        <p>
                            Para abordar la seguridad y la gestión de
                            credenciales, decidimos implementar una estrategia
                            de autenticación propia. Utilizamos la biblioteca
                            Bcrypt para cifrar todas las contraseñas recibidas,
                            garantizando que en ningún momento se almacenan
                            contraseñas en texto plano en nuestra base de datos.
                            Cuando se verifica la identidad de los usuarios, se
                            compara su contraseña con el hash almacenado en la
                            base de datos y, en caso de éxito, se les otorga un
                            token de sesión (JWT) válido por 24 horas, firmado
                            por nuestro servidor. Esto asegura que las
                            contraseñas nunca se almacenan y, en caso de un
                            acceso no autorizado al equipo del cliente, el token
                            sólo es válido durante el tiempo especificado, sin
                            acceso a las contraseñas. Para la base de datos,
                            nuestra elección recae en MongoDB, un sistema de
                            base de datos NoSQL que se ha convertido en el
                            núcleo fundamental de nuestro proyecto. La decisión
                            de optar por MongoDB se basa en su flexibilidad,
                            facilidad de gestión y la capacidad de escalabilidad
                            que ofrece. Esta elección nos ha permitido almacenar
                            y gestionar los datos de manera eficiente,
                            asegurando una infraestructura sólida para el
                            almacenamiento y acceso a la información de manera
                            efectiva.
                        </p>

                        <p>
                            Hemos implementado dos esquemas de base de datos
                            distintos para satisfacer diferentes necesidades. El
                            primer esquema está diseñado para gestionar la
                            información de los usuarios y sus credenciales. En
                            este esquema, se almacenan los datos personales de
                            los usuarios, junto con las contraseñas cifradas.
                            Esta medida de seguridad garantiza que las
                            contraseñas se almacenen de manera segura y no estén
                            expuestas en texto plano en la base de datos,
                            ayudando a proteger la privacidad de nuestros
                            usuarios. El segundo esquema se centra en el
                            registro y almacenamiento de las muestras obtenidas.
                            Aquí, recopilamos y guardamos información detallada
                            sobre cada muestra, incluyendo los parámetros
                            relevantes y los resultados obtenidos. Este esquema
                            permite un seguimiento eficiente y organizado de las
                            muestras, lo que es esencial para el propósito
                            educativo y de investigación de nuestra plataforma.
                            Cuando recibimos información desde el formulario de
                            muestras, interactuamos con la API proporcionada por
                            el equipo de Data Science y almacenamos los
                            resultados junto con los parámetros y datos de la
                            muestra. Solo los usuarios con un token de sesión
                            válido pueden registrar muestras. Todas las muestras
                            y sus resultados son públicamente accesibles a
                            través de nuestra API, que ofrece varios endpoints
                            para filtrar y acceder a la información de manera
                            efectiva.
                        </p>
                    </div>
                </section>
            </section>

            <section className="deploy RouteHeader">
                <section className="maker">
                    <div>
                        <p>EQUIPO DE DESARROLLO FULL STACK</p>
                    </div>
                </section>
                <div className="tituloDeploy">
                    <h2 className="cabeceraSeccion">DEPLOY</h2>
                </div>
                <section className="deployDescription parrafoNormal">
                    <div className="textoUno">
                        <p>
                            Para llevar a cabo el despliegue de nuestra
                            aplicación, recurrimos a varias herramientas clave,
                            siendo Docker la más destacada de todas. Docker ha
                            desempeñado un papel fundamental en la gestión y
                            despliegue de nuestros servicios al permitirnos
                            empacar la aplicación en contenedores, incluyendo
                            todas sus dependencias. Esto ha simplificado
                            significativamente la implementación y escalabilidad
                            de nuestra plataforma.
                        </p>
                    </div>

                    <div className="elRow">
                        <div className="textoDos">
                            <p>
                                En el servidor, hemos implementado Nginx Proxy
                                Manager, que cumple una función crucial al
                                enrutar las conexiones hacia sus respectivos
                                contenedores. Además, esta herramienta gestiona
                                los certificados de seguridad de manera
                                eficiente, lo que nos permite utilizar HTTPS
                                para establecer conexiones cifradas y, en
                                consecuencia, más seguras. La implementación de
                                HTTPS no solo garantiza la privacidad de los
                                datos transmitidos, sino que también mejora la
                                confiabilidad y la integridad de la información
                                que se envía y recibe en nuestra plataforma.
                            </p>
                            <p>
                                Un beneficio adicional de utilizar Docker es la
                                posibilidad de encapsular las conexiones entre
                                los contenedores. Esto nos permitió asegurarnos
                                de que la base de datos solo fuera accesible
                                desde nuestro backend, creando un entorno seguro
                                en el que los datos quedaran protegidos y solo
                                fueran accesibles a través de las credenciales
                                adecuadas. Esta medida añade una capa adicional
                                de seguridad a nuestra infraestructura,
                                garantizando la confidencialidad de la
                                información.
                            </p>
                        </div>
                        <div className="textoTres">
                            <p>
                                Con el objetivo de garantizar tanto la seguridad
                                como el rendimiento de nuestra plataforma, hemos
                                tomado medidas importantes en cuanto a la
                                gestión de dominios y la protección de
                                conexiones. Para la adquisición del dominio y la
                                administración de las DNS de nuestro proyecto,
                                hemos confiado en Cloudflare. Cloudflare no solo
                                nos proporciona un control efectivo sobre el
                                dominio, sino que también brinda protección
                                contra amenazas y acelera la entrega de
                                contenido, lo que se traduce en una experiencia
                                de usuario rápida y altamente segura.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <section className="gitHub">
                <article className="git">
                    <div className="tituloGit">
                        <h2 className="cabeceraSeccion">GITHUB</h2>
                    </div>
                    <div className="textosGit parrafoNormal">
                        <p>
                            También hemos aprovechado GitHub como una parte
                            fundamental de nuestro flujo de trabajo para mostrar
                            y gestionar el proceso de desarrollo de la
                            plataforma. A través de GitHub, hemos implementado
                            un sistema de control de versiones que nos permite
                            mantener un registro detallado de todos los cambios
                            realizados en el código de la aplicación.
                        </p>

                        <p>
                            Cada miembro del equipo puede crear ramas de
                            desarrollo para trabajar en características o
                            correcciones específicas de la aplicación. Después
                            de finalizar el trabajo en una rama, se crea una
                            solicitud de extracción (pull request) en GitHub
                            para que otros miembros del equipo revisen y
                            aprueben los cambios propuestos. Esto garantiza una
                            colaboración eficiente y un proceso de revisión de
                            código sólido.
                        </p>

                        <p>
                            En resumen, GitHub desempeña un papel esencial en la
                            colaboración y gestión de nuestro proceso de
                            desarrollo, permitiéndonos llevar un registro
                            detallado de los cambios, garantizar la calidad del
                            código y mantener una documentación actualizada para
                            el equipo.
                        </p>
                    </div>
                </article>
                <div className="linksGit">
                    Enlace al proyecto:
                    <a
                        href="https://github.com/anderconsu/Appurate"
                        className="animatedSelect"
                    >
                        <img
                            src="../../static/fullstack/githublogo1.png"
                            alt="logo Git Hub"
                        />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Fullstack;
