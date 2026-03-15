import React from "react";
import {scrollToSection} from "./Scroll";

export const Presentation = ( ) => {
    return (
        <div className="presentation">
            <h3 className="pb-3">Apprendre à me connaître !</h3>
            <div className="text-start">
                <p>Bonjour! Je m'appelle <strong>Hélène Ralu--Leroy</strong> et je suis <strong>étudiante
                    en 3<sup>ème</sup> année de BUT informatique </strong> à l'IUT de Marne la Vallée.
                </p>
                <p>Je suis en alternance chez Caseware France, où je développe mes compétences en
                    développement et en travail d'équipe sur des projets concrets.
                </p>
                <p>Curieuse et ouverte d’esprit, j’aime travailler sur des problématiques variées, coder
                    et découvrir de nouvelles technologies. Au cours de mes études, j’ai déjà participé
                    à plusieurs projets web réalisés en équipe, ce qui m’a permis de renforcer mes
                    compétences techniques et collaboratives.
                </p>
                <p>N’hésitez pas à parcourir mes projets ou à me contacter pour échanger !</p>
            </div>
            <button className="btn btn-primary background-blue fw-bold"
                    onClick={() => scrollToSection("contact")}>Contact
            </button>
        </div>
    )
}