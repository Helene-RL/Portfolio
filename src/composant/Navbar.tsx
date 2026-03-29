import React from "react"
import {Menu} from "./Menu";
import {scrollToSection} from "./Scroll";
import {Language, translations} from "../data/i18n";

export const LanguageToggle = (props: { lang: Language, setLang: (lang: Language) => void }) => {
    return (
        <button
            className="btn text-white ms-2 p-0"
            onClick={() => props.setLang(props.lang === "fr" ? "en" : "fr")}
            title="Changer la langue"
            style={{fontSize: "1.2em"}}
        >
            {props.lang === "fr" ? "🇫🇷" : "🇬🇧"}
        </button>
    );
};

export const Navbar = (props: { lang: Language, setLang: (lang: Language) => void }) => {
    return (
        <nav
            id="navbar-header"
            className="navbar navbar-expand-lg fixed-top border-bottom border-body background-blue"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <button className="navbar-brand btn btn-link background-blue"
                        onClick={() => scrollToSection("accueil")}>
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
                <Menu element_nav={translations[props.lang]} />
                <LanguageToggle lang={props.lang} setLang={props.setLang}/>
            </div>
        </nav>
    );
}

export default Navbar;
