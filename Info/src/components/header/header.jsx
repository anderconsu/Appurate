import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="cabeceraContainer">

                <picture className="logoContainer">
                    <img
                        src="./static/logoheader.png"
                        alt="Mi Logo"
                        className="logo"
                        onClick={() =>
                            (window.location.href = "https://appurate.org")
                        }
                    />
                </picture>

                <div className="botoneraContainer">
                    <button className="home">HOME</button>
                    <button className="comoHicimos">CÓMO LO HICIMOS</button>
                    <button className="contacto">CONTACTO</button>
                    <button
                        className="boton1 bold"
                        onClick={() => (window.location.href = "https://appurate.org")}
                    >
                        PROYECTO APPÚRATE
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
