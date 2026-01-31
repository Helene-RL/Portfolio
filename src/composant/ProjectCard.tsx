import React from "react";
import {Link} from "react-router-dom";

export const ProjectCard = (props: { id: string, annee: string, title: string, img: string, description: string }) => {
    return (
        <div className="card project text-white border border-dark shadow-sm mx-1">
            <div className="card-header text-center fw-bold">
                {props.annee}
            </div>
            <img src={`${import.meta.env.BASE_URL}projects/${props.img}`} className="card-img-top"
                 alt="Projet lié à Développement Web"/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={`project/${props.id}`}
                      className="btn btn-primary border">Voir le projet</Link>
            </div>
        </div>
    )
}