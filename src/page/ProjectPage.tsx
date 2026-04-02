import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {projects} from "../data/projectsData";
import {people} from "../data/people";
import {ProjectSection} from "../composant/Project/ProjectSection";
import {ProjectElement} from "../composant/Project/ProjectElement";
import {Language, translations} from "../data/i18n";

const ProjectPage = ({lang}: { lang: Language }) => {
    const {projectKey} = useParams();
    const navigate = useNavigate();
    const HandleRetour = () => {
        navigate("/");
    }

    if (!projectKey) {
        HandleRetour()
        return null;
    }

    const t = translations[lang].competences
    const project = projects[projectKey];
    const infoTraduction = t.projects[projectKey];

    if (!project) {
        HandleRetour()
        return null;
    }

    return (
        <div className="project-page">
            <div className="container-fluid my-1">

                <button className="btn mb-3 background-blue text-light" onClick={HandleRetour}>
                    {t.back}
                </button>

                <div className="card border-0 mb-4 project-header">
                    <div className="text-white text-center py-4">
                        <h2 className="fw-bold">{infoTraduction.title}</h2>
                        <p className="mb-0 fs-4">{project.year}</p>
                    </div>
                </div>

                <ProjectSection>
                    <ProjectElement element={project.image} className="d-flex justify-content-center">
                        {(() => {
                            const image = (
                                <img
                                    src={`${import.meta.env.BASE_URL}projects/${project.image}`}
                                    alt={infoTraduction.title}
                                    className="img-fluid rounded border border-2"
                                    style={{maxHeight: "25em"}}
                                />
                            );

                            return project.url ? (
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    {image}
                                </a>
                            ) : image;
                        })()}
                    </ProjectElement>

                    <ProjectElement element={infoTraduction.description}>
                        <p className="fs-6 px-3">{infoTraduction.description}</p>
                    </ProjectElement>
                </ProjectSection>

                <ProjectSection>
                    <ProjectElement title={t.objectives} element={infoTraduction.objectives} width50={false}>
                        <div className="row w-auto">
                            {infoTraduction.objectives.map((objective: string, index: number) => (
                                <div key={index} className="col-md-4 mb-3 h3">
                                    <div className="card shadow-sm">
                                        <div className="card-body text-center">
                                            {objective}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ProjectElement>
                </ProjectSection>

                <hr className="my-4"/>
                <ProjectSection>
                    <ProjectElement title={t.madeWith} element={project.faitAvec} width50={false}>
                        <ul className="list-unstyled">
                            {project.faitAvec.map((personId: string) => {
                                const person = people[personId];
                                return (
                                    <li key={personId}>• <a href={person.url} target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="lien-projet">{person.name}</a></li>
                                )
                            })}
                        </ul>
                    </ProjectElement>

                    <ProjectElement title="GitHub" element={project.github} width50={false}>
                        <a
                            href={project.github}
                            target="_blank"
                            className="color-blue">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="bi bi-github" viewBox="0 0 16 16" style={{width: "10%"}}>
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                    </ProjectElement>

                    <ProjectElement title={t.technologies} element={project.technos}>
                        <div className="mb-4">
                            {project.technos.map((tech: string, index: number) => (
                                <span key={index} className="badge rounded-pill me-1 mb-1 background-blue">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </ProjectElement>
                </ProjectSection>

            </div>
        </div>
    )
};
export default ProjectPage
