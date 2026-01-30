import Navbar from "./composant/Navbar";
import {Section} from "./composant/Section";
import {Timeline} from "./composant/Timeline";
import {Skills} from "./composant/Skills";
import {Competences} from "./composant/Competences";
import {Form} from "./composant/Form";
import {Footer} from "./composant/Footer";
import React from "react";
import {projects} from "./data/projectsData";
import "./style.css"

const FormationData = [
    {date: "2023-2026", name: "BUT informatique", place: "IUT de Marne la Vallée - Champs-sur-Marne"},
    {date: "2020-2023", name: "Baccalauréat général", place: "Lycée Arago - Paris"},
    {date: "2016-2020", name: "Brevet", place: "Collège Robert Doisneau - Paris"}
];

const ExperienceData = [
    {date: "2024-2026", name: "Alternance", place: "Caseware France - Paris"},
    {date: "décembre 2019", name: "Stage", place: "CEA - Fontenay-aux-Roses"}
]

const SkillsData = [
    {label: "HTML", img: "html.png"},
    {label: "CSS", img: "css.png"},
    {label: "JS", img: "js.png"},
    {label: "PHP", img: "php.png"},
    {label: "Python", img: "python.png"},
    {label: "MySQL", img: "sql.png"},
    {label: "PostGreSQL", img: "postgresql.png"},
    {label: "C", img: "c.png"},
    {label: "Java", img: "java.png"},
    {label: "Figma", img: "figma-logo.svg"},
    {label: "TypeScript", img: "typescript.png"},
    {label: "React", img: "react.png"},
]

const competences = [
    {
        name: "Realiser",
        description: "Partir des exigences et aller jusqu'à une application complète.",
        projects: [projects.wikiadventure]
    },
    {
        name: "Optimiser",
        description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
        projects: [projects.travia]
    },
    {
        name: "Administrer",
        description: "Déployer des services dans une infrastructure réseau",
        projects: [projects.tp_reseau]
    },
    {
        name: "Gérer",
        description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        projects: [projects.easyfund]
    },
    {
        name: "Conduire",
        description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
        projects: [projects.petit_creation]
    },
    {
        name: "Collaborer",
        description: "Situer son rôle et ses missions au sein d'une équipe informatique",
        projects: [projects.tchoutchou]
    }
];

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
                        <button type="button" className="btn btn-primary background-blue"><b>Télécharger mon cv</b>
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
                            <a href="#contact" className="btn btn-primary background-blue"><b>Contact</b></a>
                        </div>
                        <img className="img-fluid rounded h-auto mx-3 img-presentation"
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
                    <div className="container-fluid d-flex flex-wrap justify-content-around">
                        <Competences competences={competences}/>
                    </div>
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