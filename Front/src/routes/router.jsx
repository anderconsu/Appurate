import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error";

import Login from "../components/visible/login/login.jsx";
import Mapa from "../components/visible/mapa/mapa.jsx";
import Unete from "../components/visible/unete/unete.jsx";
import Nosotros from "../components/visible/nosotros/nosotros.jsx";
import Admin from "../components/admin/admin.jsx";

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
            //     path:"/form",
            //     element: <Form/>
            // },
            // {
            //     path:"/profile",
            //     element:<Profile/> 
            // },
            // {
            //     path:"/profile/update",
            //     element:<ProfileUpdate/>
            // },
            // {
            //     path:"/profile/delete",
            //     element:<ProfileDelete/>
            }
        ]         
    }
]);

export default Router;