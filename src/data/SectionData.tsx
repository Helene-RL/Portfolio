import {Presentation} from "../composant/Presentation";
import {Timeline} from "../composant/Timeline";
import {Skills, SoftSkillCard} from "../composant/Skills";
import {competences, ExperienceData, FormationData, SkillsData} from "./homeData";
import {Competences} from "../composant/Competences";
import {Form} from "../composant/Form";
import React from "react";

const BASE_URL = import.meta.env.BASE_URL;

export const sectionContent: Record<string, React.ReactNode> = {
    accueil: (
        <a href={`${BASE_URL}images/cv.pdf`} download="cv.pdf">
            <button className="btn btn-primary background-blue fw-bold">
                Télécharger mon cv
            </button>
        </a>
    ),
    presentation: (
        <div className="container-fluid d-flex justify-content-center align-items-center pt-3">
            <Presentation />
            <img
                src={`${BASE_URL}images/photo_profil.jpg`}
                alt="Photo de profil développeur"
                className="img-fluid rounded mx-3 img-presentation"
            />
        </div>
    ),
    resume: (
        <div className="container-fluid d-flex">
            <Timeline name="Formation" elements={FormationData}/>
            <Timeline name="Expérience" elements={ExperienceData}/>
        </div>
    ),
    hard_skills: <Skills tab_skills={SkillsData.hard_skills} />,
    soft_skills: (
        <div className="container-fluid d-flex flex-wrap justify-content-evenly pt-4">
            {SkillsData.soft_skills.map((skill) => (
                <SoftSkillCard key={skill.title} {...skill} />
            ))}
        </div>
    ),
    competences: <Competences competences={competences} />,
    contact: (
        <>
            <h6>N'hésitez pas à me contacter...</h6>
            <Form />
        </>
    )
};