import "./current.scss";
import PageContext from "../../context/pageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const teamName = {
    fs: "Full Stack",
    data: "Data Science",
    ux: "UX/UI",
};

const Current = () => {
    const { page } = useContext(PageContext);
    return (
        <section className="current">
            <Link to="/">Home</Link>
            <p>{page ? (teamName[page] ? ` > ${teamName[page]}` : "") : ""}</p>
        </section>
    );
};

export default Current;
