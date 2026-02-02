import React from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {projects} from "./data/projectsData";
import {people} from "./data/people";
import {scrollToSection} from "./composant/Scroll";
import {ProjectSection} from "./composant/ProjectSection";
import {ProjectElement} from "./composant/ProjectElement";

const ProjectPage = () => {
    const {projectKey} = useParams();
    const navigate = useNavigate();
    const HandleRetour = () => {
        navigate("/");
    }

    if (!projectKey) {
        HandleRetour()
        return null;
    }
    const project = projects[projectKey];

    if (!project) {
        HandleRetour()
        return null;
    }

    return (
        <div className="project-page">
            <div className="container-fluid my-1">

                <button className="btn mb-3 background-blue text-light" onClick={HandleRetour}>
                    ← Retour au portfolio
                </button>

                <div className="card border-0 mb-4 project-header">
                    <div className="text-white text-center py-4">
                        <h2 className="fw-bold">{project.title}</h2>
                        <p className="mb-0 fs-4">{project.year}</p>
                    </div>
                </div>

                <ProjectSection>
                    <ProjectElement element={project.image} class="d-flex justify-content-center">
                        <img src={`${import.meta.env.BASE_URL}projects/${project.image}`}
                             alt={project.title}
                             className="img-fluid rounded border border-2" style={{ maxHeight: "25em" }} />
                    </ProjectElement>

                    <ProjectElement element={project.description}>
                        <p className="fs-6 px-3">{project.description}</p>
                    </ProjectElement>
                </ProjectSection>

                <ProjectSection>
                    <ProjectElement title="Contexte" element={project.context}>
                        <p>{project.context}</p>
                    </ProjectElement>

                    <ProjectElement title="Objectifs" element={project.objectives}>
                        <div className="row">
                            {project.objectives.map((objective: string, index: number) => (
                                <div key={index} className="col-md-4 mb-3 h3">
                                    <div className="card border-0 shadow-sm h-100">
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
                    <ProjectElement title="Fait avec" element={project.faitAvec}>
                        <ul className="list-unstyled">
                            {project.faitAvec.map((person: string, index: number) => (
                                <li key={index}>• <a href={people[person]} target="_blank" rel="noopener noreferrer"
                                                     className="lien-projet">{person}</a></li>
                            ))}
                        </ul>
                    </ProjectElement>

                    <ProjectElement title="Technologies utilisées" element={project.technos}>
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
