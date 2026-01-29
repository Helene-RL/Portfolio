import React from 'react'
import './style.css'
import Navbar from "./composant/Navbar";
import {Section} from "./composant/Section";
import {Footer} from "./composant/Footer";
import {Timeline} from "./composant/Timeline";
import {Skills} from "./composant/Skills";
import {projects} from "./data/projectsData";
import {Competences} from "./composant/Competences";

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
{/**/
}

function App() {
    // @ts-ignore
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
                    <a href="images/cv.pdf" download="cv.pdf">
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
                             src="/src/images/photo_profil.jpg"
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
                    <form action="mailto:helene.raluleroy@gmail.com" method="post"
                          className="bg-primary mx-auto my-2 px-5 py-2 rounded background-blue text-start text-light">
                        <label htmlFor="name" className="form-label">Nom</label>
                        <input required placeholder="Entrer votre nom" className="form-control" type="text" name="name"
                               id="name"/>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input required placeholder="Entrer votre Email" className="form-control" type="email"
                               name="email"
                               id="email"/>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea required cols={30} rows={6} placeholder="Entrer votre Message"
                                  className="form-control"
                                  id="message"></textarea>
                        <button type="submit" className="btn btn-light my-2">Envoyer</button>
                    </form>
                </Section>

                <div className="scroll-to-top background-blue" onClick={scrollToTop()}>
                    <span>&uarr;</span>
                </div>
            </div>
            {/*footer*/}
            <Footer/>
        </>
    );
}

export default App;

{/*Compétence 1*/
}
<div className="card card-portfolio my-3">
    <div className="card-body" data-bs-toggle="collapse" data-bs-target="#competence1Details"
         aria-expanded="false" aria-controls="competence1Details">
        <h5 className="card-title text-center">
            Réaliser
        </h5>
        <p className="card-text text-center">Partir des exigences et aller jusqu'à une
            application
            complète.</p>
    </div>
    <div className="collapse" id="competence1Details">
        <div className="card-body d-flex justify-content-center">
            <div className="card project text-white border border-dark shadow-sm">
                <div className="card-header text-center fw-bold">
                    BUT 2
                </div>
                <img src="projects/wikiadventure.png" className="card-img-top"
                     alt="Projet lié à Développement Web"/>
                <div className="card-body text-center">
                    <h5 className="card-title">WikiAdventure (terminé)</h5>
                    <p className="card-text">Jeu stratégique basé sur la navigation d’articles
                        Wikipedia dans un
                        contexte compétitif.</p>
                    <a href="project.php?project=wikiadventure"
                       className="btn btn-primary border">Voir le projet</a>
                </div>
            </div>
        </div>
    </div>
</div>

{/*Compétence 2*/
}
<div className="card card-portfolio my-3">
    <div className="card-body" data-bs-toggle="collapse" data-bs-target="#competence2Details"
         aria-expanded="false" aria-controls="competence2Details">
        <h5 className="card-title text-center">
            Optimiser
        </h5>
        <p className="card-text text-center">Sélectionner les algorithmes adéquats pour répondre
            à
            un problème
            donné</p>
    </div>
    <div className="collapse" id="competence2Details">
        <div className="card-body d-flex justify-content-center">
            <div className="card project text-white border border-dark shadow-sm">
                <div className="card-header text-center fw-bold">
                    BUT 2
                </div>
                <img src="projects/travia.png" className="card-img-top"
                     alt="Projet lié à Développement Web"/>
                <div className="card-body text-center">
                    <h5 className="card-title">Travia (terminé)</h5>
                    <p className="card-text">Jeu stratégique basé sur la navigation d’articles
                        Wikipedia dans un
                        contexte compétitif.</p>
                    <a href="project.php?project=travia" className="btn btn-primary border">Voir
                        le projet</a>
                </div>
            </div>
        </div>
    </div>
</div>

{/*Compétence 3*/
}
<div className="card card-portfolio my-3">
    <div className="card-body" data-bs-toggle="collapse" data-bs-target="#competence3Details"
         aria-expanded="false" aria-controls="competence3Details">
        <h5 className="card-title text-center">
            Administrer
        </h5>
        <p className="card-text text-center">Déployer des services dans une infrastructure
            réseau</p>
    </div>
    <div className="collapse" id="competence3Details">
        <div className="card-body d-flex justify-content-center">
            <div className="card project text-white border border-dark shadow-sm">
                <div className="card-header text-center fw-bold">
                    BUT 2
                </div>
                <img src="projects/tp_reseau.png" className="card-img-top"
                     alt="Projet lié à Développement Web"/>
                <div className="card-body text-center">
                    <h5 className="card-title">Tp de réseau</h5>
                    <p className="card-text">Jeu stratégique basé sur la navigation d’articles
                        Wikipedia dans un
                        contexte compétitif.</p>
                    <a href="project.php?project=tp_reseau" className="btn btn-primary border">Voir
                        le projet</a>
                </div>
            </div>
        </div>
    </div>
</div>

{/*Compétence 4*/
}
<div className="card card-portfolio my-3">
    <div className="card-body" data-bs-toggle="collapse" data-bs-target="#competence4Details"
         aria-expanded="false" aria-controls="competence4Details">
        <h5 className="card-title text-center">
            Gérer
        </h5>
        <p className="card-text text-center">Optimiser une base de données, interagir avec une
            application et
            mettre en œuvre la sécurité</p>
    </div>
    <div className="collapse" id="competence4Details">
        <div className="card-body ">
            <h5>EasyFunds(terminé)</h5>
            <div className="container-fluid d-flex align-items-center">
                <a className="img-project" target="_blank" rel="noreferrer"
                   href="https://damien-tremerie.go.yj.fr/easyfunds2/login.php">
                    <img src="projects/easyfund.png"
                         alt="Projet lié à Développement Web"
                         loading="lazy"
                         className="img-fluid w-auto border border-3 border-dark"/>
                </a>
                <div className="mt-2 mx-5 text-start w-100">
                    <p>
                        L’objectif de ce projet était de créer un site de suivi d’activités
                        monétiques au
                        quotidien
                        pour les entreprises afin qu'elles puissent suivre leurs dépenses
                        quotidienne.
                        L’application web
                        devait pouvoir gérer différents types d’utilisateurs : Administrateur,
                        Product Owner
                        et Client;
                        avec chacun leurs spécificités et des attendus divers.
                    </p>
                    <p>Fait avec:
                        <a className="lien-projet" target="_blank"
                           href="https://www.linkedin.com/in/damien-tremerie/">Damien
                            Tremeri</a>,
                        <a className="lien-projet" target="_blank"
                           href="https://www.linkedin.com/in/romain-loncin/">Romain
                            Loncin</a>,
                        <a className="lien-projet" target="_blank"
                           href="https://www.linkedin.com/in/emilie-qiaoxin-xu/">Emilie
                            Xu</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

{/*Compétence 5*/
}
<div className="card card-portfolio my-3">
    <div className="card-body" data-bs-toggle="collapse" data-bs-target="#competence5Details"
         aria-expanded="false" aria-controls="competence5Details">
        <h5 className="card-title text-center">
            Conduire
        </h5>
        <p className="card-text text-center">Appliquer une démarche de suivi de projet en
            fonction
            des besoins
            métiers des clients et des utilisateurs</p>
    </div>
    <div className="collapse" id="competence5Details">
        <div className="card-body">
            <h5>Projet Personnelle: Les créations de Julie (en pause)</h5>
            <div className="container-fluid d-flex align-items-center">
                <a className="img-project" target="_blank" rel="noreferrer"
                   href="http://atout-accessibilite.fr/doudous/index.php">
                    <img src="projects/petit_creation.png"
                         alt="Projet lié à Développement Web"
                         loading="lazy"
                         className="img-fluid w-auto border border-3 border-dark"/>
                </a>
                <div className="mt-2 mx-5 text-start w-100">
                    <p>
                        Ce projet a vu le jour en collaboration avec un expert en accessibilité,
                        dans le but
                        de créer un site de vente en ligne dédié aux doudous faits main.
                        L'objectif était de
                        concevoir un site simple et attrayant pour présenter et vendre ces
                        créations
                        uniques, tout en assurant une accessibilité optimale pour tous les
                        utilisateurs, y
                        compris ceux ayant des besoins spécifiques en matière d'accessibilité
                        numérique. Le
                        site devait permettre aux clients de découvrir et d’acheter les doudous,
                        tout en
                        offrant une navigation fluide et inclusive.
                    </p>
                    <p>Fait avec:
                        <a className="lien-projet" target="_blank"
                           href="https://www.linkedin.com/in/julie-leroy-aa671a5a/">Julie
                            Leroy</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

{/*Compétence 6*/
}
<div className="card card-portfolio my-3">
    <div className="card-body" data-bs-toggle="collapse" data-bs-target="#competence6Details"
         aria-expanded="false" aria-controls="competence6Details">
        <h5 className="card-title text-center">
            Collaborer
        </h5>
        <p className="card-text text-center">Situer son rôle et ses missions au sein d'une
            équipe
            informatique</p>
    </div>
    <div className="collapse" id="competence6Details">
        <div className="card-body">
            <h5>Tchou-Tchou (Terminé)</h5>
            <div className="container-fluid d-flex align-items-center">
                <a className="img-project" target="_blank" rel="noreferrer"
                   href="http://localhost/Tchou-Tchou/web/search.php">
                    <img src="projects/tchou-tchou.png"
                         alt="Projet lié à Développement Web"
                         loading="lazy"
                         className="img-fluid w-auto border border-3 border-dark"/>
                </a>
                <div className="mt-2 mx-5 text-start w-100">
                    <p>
                        L’objectif de ce projet était de concevoir et de développer une
                        plateforme moderne,
                        intuitive et sécurisée qui permette aux voyageurs de réserver facilement
                        leurs
                        billets TGV. Le site devait offrir des fonctionnalités pratiques telles
                        que la
                        recherche de trajets, la gestion des réservations et le paiement en
                        ligne.
                    </p>
                    <p>Fait avec:
                        <a className="lien-projet" target="_blank"
                           href="https://www.linkedin.com/in/damien-tremerie/">Damien
                            Tremeri</a>,
                        <a className="lien-projet" target="_blank"
                           href="https://www.linkedin.com/in/romain-loncin/">Romain
                            Loncin</a>,
                        <a className="lien-projet" target="_blank"
                           href="https://www.linkedin.com/in/rissot/">Benjamin Rissot
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>