import React from "react"
import {ProjectCard} from "./ProjectCard";
import {Project} from "../data/projectsData";

export const CompetenceCard = (props: {
    name: string,
    description: string,
    list_projectCard: Project[]
}) => {
    const collapseId = `competence-${props.name}`;
    return (
        <div className="card card-portfolio my-3">
            <div className="card-body" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`}
                 aria-expanded="false" aria-controls={`#${collapseId}`}>
                <h5 className="card-title text-center">
                    {props.name}
                </h5>
                <p className="card-text text-center">{props.description}</p>
            </div>
            <div className="collapse" id={`${collapseId}`}>
                <div className="card-body d-flex justify-content-center">
                    {props.list_projectCard.map((project: Project) => (
                        <ProjectCard key={project.id} id={project.id} annee={project.year} title={project.title} img={project.image}
                                     description={project.description_card}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

type CompetencesData = {
    name: string;
    description: string;
    projects: Project[];
}

export const Competences = (props: { competences: CompetencesData[] }) => {
    return (
        <div className="container-fluid d-flex flex-wrap justify-content-around">
            {props.competences.map((item) => (
                <CompetenceCard key={item.name} name={item.name} description={item.description}
                                list_projectCard={item.projects} />
            ))}
        </div>
    )
}