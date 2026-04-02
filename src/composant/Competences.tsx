import React, {useState} from "react"
import {ProjectCard} from "./Project/ProjectCard";
import {Project} from "../data/projectsData";
import {Language, translations} from "../data/i18n";

export const CompetenceCard = (props: {
    lang: Language
    name: string,
    description: string,
    list_projectCard: Project[]
}) => {
    const collapseId = `competence-${props.name}`;

    const [open, setOpen] = useState(false);
    return (
        <div className="card card-portfolio my-3 mx-2 cursor-pointer" style={{
            flex: open ? "0 0 80%" : "0 0 18rem",
            maxWidth: open ? "80%" : "18rem",
        }}>
            <div className="card-body" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`}
                 aria-expanded="false" aria-controls={`#${collapseId}`} onClick={() => setOpen(!open)}>
                <h5 className="card-title text-center">
                    {props.name}
                </h5>
                <p className="card-text text-center">{props.description}</p>
            </div>
            <div className={`collapse ${open ? "show" : ""}`} id={`${collapseId}`}>
                <div className="card-body d-flex flex-wrap justify-content-center">
                    {props.list_projectCard.map((project: Project) => {
                        const infoTranslation= translations[props.lang].competences.projects[project.id]
                        return (
                            <ProjectCard key={project.id} id={project.id} annee={project.year} title={infoTranslation.title}
                                         img={project.image}
                                         description={infoTranslation.description_card}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}