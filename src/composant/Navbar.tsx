import React from "react"
import {Menu} from "./Menu";

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
                <a href="#accueil" className="navbar-brand">
                    <img
                        src={`${import.meta.env.BASE_URL}images/photo_profil.jpg`}
                        alt="photo de profil"
                        className="img-fluid rounded-circle border border-2 border-light"
                        style={{width: "2em"}}
                    />
                    <span>Hélène Ralu--Leroy</span>
                </a>

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
