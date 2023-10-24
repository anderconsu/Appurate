import "./ux.scss";

const Ux = () => {
    return (
        <main>
            <h1>UX/UI CASE STUDY</h1>
            <section className="intro">
                <article>
                    <h3>Equipo UX/UI Product Designer</h3>
                    <p>
                        ¡Hola! somos el equipo de diseño UX/UI. Venimos de
                        diferentes universidades, profesiones y lugares pero
                        tenemos algo en común, el buen rollo y una pasión clara
                        por el diseño UX/UI. Somos un equipo que hemos trabajado
                        en este proyecto con compromiso y mucho esfuerzo.
                    </p>
                    <p>
                        A pesar de tener un plazo de tiempo limitado de dos
                        semanas, durante las cuales experimentamos un período de
                        mayor intensidad de trabajo de alrededor de 4 días en
                        promedio, logramos desarrollar un producto del que
                        podemos sentirnos orgullosos y que cumplió con éxito las
                        necesidades del proyecto.
                    </p>
                </article>
                <article>
                    <h3>Nuestro roll en el proyecto</h3>
                    <p>
                        En el proyecto que mencionamos, nuestro equipo de diseño
                        UX/UI desempeñó un papel fundamental. Comenzamos por
                        entender las necesidades de los usuarios a través de
                        entrevistas y empatía, y luego definimos claramente el
                        problema y establecimos objetivos específicos. Generamos
                        ideas creativas, diseñamos prototipos y realizamos
                        pruebas de usabilidad para mejorar nuestros diseños. En
                        resumen, nuestro enfoque se centró en garantizar que la
                        plataforma educativa fuera intuitiva y atractiva,
                        cumpliendo así nuestro objetivo de empoderar a los
                        jóvenes para tomar medidas responsables y concienciarse
                        sobre la calidad del agua en la comunidad de Bilbao.
                    </p>
                </article>
            </section>
            <section className="perfiles">
                <div className="irati profile">
                    <img
                        src="./static/perfiles/irati.png"
                        alt="Irati"
                        className="profileImg"
                    />
                    <p>Irati Lozano Segovia</p>
                    <h3>UX/UI Product Designer</h3>
                    <img src="./static/linkedinLogo.png" alt="linkedinLogo" />
                </div>
                <div className="sebas profile">
                    <img
                        src="./static/perfiles/sebastian.png"
                        alt="Sebastian"
                        className="profileImg"
                    />
                    <p>Sebastián Reina</p>
                    <h3>UX/UI Product Designer</h3>
                    <img src="./static/linkedinLogo.png" alt="linkedinLogo" />
                </div>
                <div className="oscar profile">
                    <img
                        src="./static/perfiles/oscar.png"
                        alt="Oscar"
                        className="profileImg"
                    />
                    <p>Oscar Ciencia</p>
                    <h3>UX/UI Product Designer</h3>
                    <img src="./static/linkedinLogo.png" alt="linkedinLogo" />
                </div>
            </section>
        </main>
    );
};

export default Ux;
