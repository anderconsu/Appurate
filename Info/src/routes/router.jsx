import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error";
import Fullstack from "../components/fullstack/fullstack.jsx";
// import Header from "../components/header/header.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/fullstack",
                element: <Fullstack />,
            }
        ],
    },
]);

export default Router;
