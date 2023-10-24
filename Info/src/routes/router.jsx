import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error";
import Landing from "../components/landing/landing.jsx";

import Fullstack from "../components/fullstack/fullstack.jsx";
import Ux from "../components/ux_ui/ux.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/ux-ui",
                element: <Ux />,
            },
        
            {
                path: "/fullstack",
                element: <Fullstack />,
            },

            {
                path: "/",
                element: <Landing />,
            }
        ],
    },
]);

export default Router;
