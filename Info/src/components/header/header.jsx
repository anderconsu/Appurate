import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <picture className="logoContainer">
                <img
                    src="./static/logo.png"
                    alt="Mi Logo"
                    className="logo"
                    onClick={() =>
                        (window.location.href = "https://appurate.org")
                    }
                />
            </picture>
            <button
                className="boton1 bold"
                onClick={() => (window.location.href = "https://appurate.org")}
            >
                Descubre la web
            </button>
        </header>
    );
};

export default Header;
