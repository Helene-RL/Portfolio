import {Presentation} from "../composant/Presentation";
import {Timeline} from "../composant/Timeline";
import {CategorySkill, SoftSkillCard} from "../composant/Skills";
import {competences, ExperienceData, FormationData, SkillsData} from "./homeData";
import {CompetenceCard} from "../composant/Competences";
import {Form} from "../composant/Form";
import React from "react";
import {Language, translations} from "./i18n";

const BASE_URL = import.meta.env.BASE_URL;

type SectionContentItem = {
    className?: string;
    content: React.ReactNode;
};

export const sectionContent = (lang: Language): Record<string, SectionContentItem> => {
    const t = translations[lang];
    return {
        accueil: {
            className: "justify-content-center",
            content: (
                <a href={`${BASE_URL}images/cv.pdf`} download="cv.pdf">
                    <button className="btn btn-primary background-blue fw-bold">
                        {t.accueil.buttonCV}
                    </button>
                </a>
            )
        },
        presentation: {
            className: "justify-content-center align-items-center pt-3",
            content: (
                <>
                    <Presentation lang={lang}/>
                    <img
                        src={`${BASE_URL}images/photo_profil.jpg`}
                        alt="Photo de profil développeur"
                        className="img-fluid rounded mx-3 img-presentation"
                    />
                </>)
        },
        resume: {
            content: (
                <>
                    <Timeline name="Formation" elements={FormationData}/>
                    <Timeline name="Expérience" elements={ExperienceData}/>
                </>
            )
        },
        hard_skills: {
            className: "flex-wrap justify-content-around",
            content: (
                <>
                    {SkillsData.hard_skills.map((cat) => (
                        <CategorySkill lang={lang} key={cat.category} category={cat.category} skills={cat.skills}/>
                    ))
                    }
                </>
            )
        },
        soft_skills: {
            className: "flex-wrap justify-content-evenly pt-4",
            content: (
                <>
                    {t.soft_skills.skills.map((skill) => (
                        <SoftSkillCard key={skill.title} {...skill} />
                    ))}
                </>
            )
        },
        competences: {
            className: "flex-wrap justify-content-center",
            content: (
                <>
                    {Object.keys(t.competences.descriptions).map((item) => {
                        const competence = t.competences.descriptions[item];
                        const projects = competences[item]
                        return (<CompetenceCard key={competence.name} lang={lang} name={competence.name} description={competence.description}
                                                list_projectCard={projects}/>
                        )
                    })}
                </>
            )
        },
        contact: {
            className: "flex-column justify-content-center",
            content: (
                <>
                    <h6>{t.contact.info}</h6>
                    <Form lang={lang}/>
                </>
            )
        }
    };
}