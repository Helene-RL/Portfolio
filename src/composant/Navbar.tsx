import React from "react"
import {Menu} from "./Menu";
import {scrollToSection} from "./Scroll";

const navElements = [
    {label: "Accueil", anchor: "accueil"},
    {label: "Présentation", anchor: "presentation"},
    {label: "Résumé", anchor: "resume"},
    {label: "Hard skills", anchor: "hard_skills"},
    {label: "Compétences", anchor: "competences"},
    {label: "Contact", anchor: "contact"}
]

export const Navbar = () => {
    return (
        <nav
            id="navbar-header"
            className="navbar navbar-expand-lg fixed-top border-bottom border-body background-blue"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <button className="navbar-brand btn btn-link background-blue" onClick={()=>scrollToSection("accueil")}>
                    <img
                        src={`${import.meta.env.BASE_URL}images/photo_profil.jpg`}
                        alt="photo de profil"
                        className="img-fluid rounded-circle border border-2 border-light"
                        style={{width: "2em"}}
                    />
                    <span className="mx-1">Hélène Ralu--Leroy</span>
                </button>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <Menu element_nav={navElements}/>
            </div>
        </nav>
    );
}

export default Navbar;
