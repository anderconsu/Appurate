import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error";
import Landing from "../components/landing/landing.jsx";

// import Header from "../components/header/header.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Landing />,
            }
        ],
    },
]);

export default Router;
