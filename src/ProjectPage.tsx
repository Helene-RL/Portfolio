import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {projects} from "./data/projectsData";
import {people} from "./data/people";

const ProjectPage = () => {
    const {projectKey} = useParams();
    const navigate = useNavigate();

    if (!projectKey) {
        navigate("/"); // redirection si projectKey inexistant
        return null;
    }
    const project = projects[projectKey];

    if (!project) {
        navigate("/"); // redirection si projet inexistant
        return null;
    }

    // @ts-ignore
    return (
        <div className="project-page">
            <div className="container my-5">

                <a href="../index.html#competences" className="btn btn-outline-primary mb-4">
                    ← Retour au portfolio
                </a>

                <div className="card border-0 mb-4 project-header">
                    <div className="text-white text-center py-5">
                        <h1 className="fw-bold">{project.title}</h1>
                        <p className="mb-0 fs-5">{project.year}</p>
                    </div>
                </div>

                <div className="text-center mb-4">
                    <img src={`/src/images/${project.image}`}
                         alt={project.title}
                         className="img-fluid rounded"
                         style={{maxHeight: "350px"}}/>
                </div>

                <p className="fs-5 text-center mb-5">{project['description']}</p>

                <h3 className="mb-3" style={{color: "#4F8FCC"}}>Contexte</h3>
                <p>{project.context}</p>


                <h3 className="mb-3 h3">Objectifs</h3>
                <div className="row">
                    {project.objectives.map(objective => (
                        <div className="col-md-4 mb-3 h3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body text-center">
                                    {objective}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <hr className="my-4"/>
                {project.faitAvec && <div>
                    <h3 className="mb-3 h3">Fait avec</h3>
                    <ul className="list-unstyled">
                        {project.faitAvec.map((person) => (
                            <li>• <a href={people[person]} target="_blank" rel="noopener noreferrer"
                                     className="lien-projet">{person}</a></li>
                        ))}
                    </ul>
                </div>
                }


                <h3 className="mb-3 h3">Technologies utilisées</h3>

                <div className="mb-4">
                    {project.technos.map(tech => (
                        <span className="badge rounded-pill me-1 mb-1 background-blue">
                        {tech}
                    </span>
                    ))}
                </div>

            </div>
        </div>
    )
};
export default ProjectPage
