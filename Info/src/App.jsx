import { Outlet } from "react-router-dom";
import "./App.css";
import "./components/general.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar.jsx";
import Current from "./components/current/current";
function App() {
    return (
        <>
            <Header />
            <Current />
            <Outlet />
            <Navbar />
            <Footer />
        </>
    );
}

export default App;
