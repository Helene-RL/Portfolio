import React from "react"


export const SoftSkillCard = (props: { icon: any, title: string, description: string }) => {
    return (
            <div className="card shadow-sm border-1 rounded-3 mb-3">
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

export const CategorySkill = (props: { category: string, skills: SkillsData[] }) => {
    return (
        <div className="border border-dark rounded-5 my-2 mx-1 shadow p-1 category-skill">
            <h4 className="mb-3">{props.category}</h4>
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

type SkillsData = {
    label: string;
    img: string;
}

type SkillCategory = {
    category: string;
    skills: SkillsData[];
};

export const Skills = (props: { tab_skills: SkillCategory[] }) => {
    return (
        <div className="container-fluid d-flex flex-wrap justify-content-around">
            {props.tab_skills.map((cat) => (
                <CategorySkill key={cat.category} category={cat.category} skills={cat.skills}/>
            ))}
        </div>
    )
}