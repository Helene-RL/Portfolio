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
    const headingId = `heading-${props.name}`;

    const [open, setOpen] = useState(false);
    return (
        <div className="accordion my-3 mx-2 " style={{
            flex: open ? "0 0 80%" : "0 0 18rem",
            maxWidth: open ? "80%" : "18rem",
            transition: "all 0.4s ease",
        }}>
            <div className="accordion-item card-portfolio">
                <h2 className="accordion-header" id={headingId}>
                    <button
                        className={`accordion-button ${open ? "" : "collapsed"} text-white`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={open}
                        aria-controls={collapseId}
                        onClick={() => setOpen(!open)}

                    >
                        <div className="w-100 text-center">
                            <h5 className="mb-1">{props.name}</h5>
                            <p className="mb-0">{props.description}</p>
                        </div>
                    </button>
                </h2>

                <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby={headingId}
                >
                    <div className="accordion-body d-flex flex-wrap justify-content-center">
                        {props.list_projectCard.map((project: Project) => {
                            const infoTranslation = translations[props.lang].competences.projects[project.id]
                            return (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    annee={project.year}
                                    title={infoTranslation.title}
                                    img={project.image}
                                    description={infoTranslation.description_card}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}