import React from "react"
import {Language, translations} from "../data/i18n";


export const SoftSkillCard = (props: { icon: any, title: string, description: string }) => {
    return (
        <div className="card shadow-sm border-dark border-1 rounded-3 mb-3">
            <div className="card-body d-flex">
                <div className="pe-1">{props.icon}</div>
                <h5 className="card-title fw-semibold color-blue">{props.title}</h5>
            </div>
        </div>
    );
};

export const HardSkill = (props: { label: string, img: string }) => {
    return (
        <div className="p-2 text-center">
            <p>{props.label}</p>
            <img src={`${import.meta.env.BASE_URL}images/${props.img}`} alt={props.label} className="img-competence"/>
        </div>
    )
}

type SkillsData = {
    label: string;
    img: string;
}

export const CategorySkill = (props: {lang:Language, category: keyof typeof translations["fr"]["hard_skills"]["category"], skills: SkillsData[] }) => {
    const t = translations[props.lang];
    return (
        <div className="border border-dark rounded-5 my-2 mx-1 shadow p-1 category-skill">
            <h4 className="mb-3">{t.hard_skills.category[props.category]}</h4>
            <div className="container d-flex flex-wrap text-center justify-content-center align-items-center">
                {props.skills.map((item: SkillsData) => (
                    <HardSkill
                        key={item.label}
                        label={item.label}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}