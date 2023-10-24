import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
