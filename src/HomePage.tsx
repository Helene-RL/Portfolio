import React from "react";
import Navbar from "./composant/Navbar";
import {Section} from "./composant/Section";
import {Timeline} from "./composant/Timeline";
import {Skills} from "./composant/Skills";
import {Competences} from "./composant/Competences";
import {Form} from "./composant/Form";
import {Footer} from "./composant/Footer";
import {scrollToSection} from "./composant/Scroll";
import {FormationData, ExperienceData, SkillsData, competences} from "./data/homeData"
import "./style.css"


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

export const HomePage = () => {
    return (
        <>
            {/*header*/}
            <header>
                <Navbar/>
            </header>
            <div className="container-fluid d-flex flex-column w-100 scrollspy-example"
                 data-bs-spy="scroll" data-bs-target="#navbar-header" data-bs-root-margin="0px 0px -40%"
                 data-bs-smooth-scroll="true" tabIndex={0}>
                {/*accueil*/}
                <Section id="accueil" name="Bienvenue sur mon portfolio" level={1}>
                    <a href={`${import.meta.env.BASE_URL}images/cv.pdf`} download="cv.pdf">
                        <button className="btn btn-primary background-blue fw-bold">Télécharger mon cv
                        </button>
                    </a>
                </Section>

                {/*presentation*/}
                <Section id="presentation" name="Présentation">
                    <div className="container-fluid d-flex justify-content-center align-items-center pt-3">
                        <div className="presentation">
                            <h3 className="pb-3">Apprendre à me connaître !</h3>
                            <div className="text-start">
                                <p>Bonjour! Je m'appelle <strong>Hélène Ralu--Leroy</strong> et je suis <strong>étudiante
                                    en 3<sup>ème</sup> année de BUT informatique </strong> à l'IUT de Marne la Vallée.
                                </p>
                                <p>Je suis actuellement un contrat d'alternance Caseware France.
                                </p>
                                <p>Je suis curieuse et ouverte d'esprit, j'aime travailler sur des problématiques
                                    variées. J'aime bien coder et découvrir de nouvelles choses. J'ai déjà réalisé
                                    plusieurs projets web avec des équipes. N'hésitez pas à me contacter.
                                </p>
                            </div>
                            <button className="btn btn-primary background-blue fw-bold"
                                    onClick={() => scrollToSection("contact")}>Contact
                            </button>
                        </div>
                        <img loading="lazy" className="img-fluid rounded h-auto mx-3 img-presentation"
                             src={`${import.meta.env.BASE_URL}images/photo_profil.jpg`}
                             alt="ma photo"/>
                    </div>
                </Section>

                {/*resume*/}
                <Section id="resume" name="Résumé">
                    <div className="container-fluid d-flex">
                        <Timeline name="Formation" elements={FormationData}/>
                        <Timeline name="Expérience" elements={ExperienceData}/>
                    </div>
                </Section>

                {/*hard skills*/}
                <Section id="hard_skills" name="Hard Skills">
                    <Skills tab_skills={SkillsData}/>
                </Section>

                {/*compétences*/}
                <Section id="competences" name="Compétences">
                    <Competences competences={competences}/>
                </Section>

                {/*contact*/}
                <Section id="contact" name="Contact">
                    <h6>N'hésitez pas à me contacter, je suis joignable du lundi au vendredi de 8h à 18h.</h6>
                    <Form/>
                </Section>

                <div className="scroll-to-top background-blue" onClick={scrollToTop}>
                    <span>&uarr;</span>
                </div>
            </div>
            {/*footer*/}
            <Footer/>
        </>
    )
}