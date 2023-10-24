import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error";
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
        ],
    },
]);

export default Router;
