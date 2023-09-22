import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error";

import Login from "../components/visible/login/login.jsx";
import Mapa from "../components/visible/mapa/mapa.jsx";
import Unete from "../components/visible/unete/unete.jsx";
import Nosotros from "../components/visible/nosotros/nosotros.jsx";
import Admin from "../components/admin/admin.jsx";
import Landing from "../components/privada/landing/landing.jsx";
import Registro from "../components/privada/registro/registro.jsx";
// import Ficha from "../components/privada/ficha/ficha.jsx";
import Recursos from "../components/privada/recursos/recursos.jsx";
// import Header from "../components/header/header.jsx";
import Home from "../components/visible/home/home.jsx";
import Footer from "../components/footer/footer.jsx";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<Root />, 
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/mapa",
                element: <Mapa />
            },
            {
                path:"/unete",
                element: <Unete /> 
            }, 
            {
                path:"/nosotros",
                element: <Nosotros/>
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/admin",
                element: <Admin/>
            },
            {
                path:"/landing",
                element: <Landing />
            },
            {
                path:"/registro",
                element:<Registro />
            },
            // {
            //     path:"/ficha",
            //     element:<Ficha/>
            // },
            {
                path:"/recursos",
                element:<Recursos/>
            },
            // {
            //     path:"/header",
            //     element:<Header/>
            // },
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/footer",
                element:<Footer/>
            }
        ]         
    }
]);

export default Router;