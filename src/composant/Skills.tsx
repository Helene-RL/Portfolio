import React from "react"

export const Skill = (props: { label: string, img: string }) => {
    return (
        <div className="p-2 text-center">
            <p>{props.label}</p>
            <img src={`/src/images/${props.img}`} alt={props.label} className="img-competence"/>
        </div>
    )
}

type SkillsData = {
    label: string;
    img: string;
}
export const Skills = (props: { tab_skills: SkillsData[] }) => {
    return (
        <div className="d-flex flex-wrap text-center justify-content-center align-items-center">
            {props.tab_skills.map((item: SkillsData) => (
                <Skill
                    key={item.label}
                    label={item.label}
                    img={item.img}
                />
            ))}
        </div>
    )
}