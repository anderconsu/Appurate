import App from "../App.jsx";
import { useState } from "react";

// Context
import PageContext from "../context/pageContext.jsx";

const Root = () => {
    const [page, setPage] = useState("");
    return (
        <PageContext.Provider value={{ page, setPage }}>
            <App />
        </PageContext.Provider>
    );
};

export default Root;
