import "./navbar.scss";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContext from "../../context/pageContext";
const team = ["data", "fs", "ux"];
const urldict = {
    fs: "/fullstack",
    data: "/data-science",
    ux: "/ux-ui",
};

const teamName = {
    fs: "Full Stack",
    data: "Data Science",
    ux: "UX/UI",
};

const Navbar = () => {
    const { page, setPage } = useContext(PageContext);
    const [teamlist, setTeamlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let varteamlist = team.filter((item) => {
            return item !== page;
        });
        setTeamlist(varteamlist);
        console.log(page);
    }, [page, setPage]);
    return (
        <>
            <nav className="navbar">
                {teamlist.map((item) => {
                    return (
                        <div className="item teamImg" key={item}>
                            <p className="teamText">
                                {`¿Qué rol tuvo ${teamName[item]} en el proyecto?`}
                            </p>
                            <img
                                src={`./static/nav/${item}.png`}
                                alt={item}
                                onClick={() => {
                                    navigate(urldict[item]);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            />
                        </div>
                    );
                })}
            </nav>
            <div className="thanks">
                <p>El equipo te da las gracias por haber llegado hasta aquí.</p>
            </div>
        </>
    );
};

export default Navbar;
