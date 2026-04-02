import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {projects} from "../data/projectsData";
import {people} from "../data/people";
import {ProjectSection} from "../composant/Project/ProjectSection";
import {ProjectElement} from "../composant/Project/ProjectElement";
import {Language, translations} from "../data/i18n";

const ProjectPage = ({lang}: { lang: Language}) => {
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
                                    <div className="card border-0 shadow-sm">
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
                    <ProjectElement title={t.madeWith} element={project.faitAvec}>
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
