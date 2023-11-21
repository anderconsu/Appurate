import { createContext } from "react";

const PageContext = createContext(
    {
        page: "",
        setPage: () => {},
    }
);

export default PageContext;