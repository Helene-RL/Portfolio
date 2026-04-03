import React from "react";
import {Language, translations} from "../data/i18n";

export const Element_Timeline = (props: {
    date: string,
    name: string,
    place: string,
    role?: string;
    specialty?: string;
}) => {
    return (
        <div className="bg-primary m-2 p-2 rounded-4 text-white background-blue">
            <span>{props.date}</span><br/>
            <span>{props.name}</span><br/>
            {props.role && <div><em>{props.role}</em></div>}
            {props.specialty && <div><small>{props.specialty}</small></div>}
            {props.place}
        </div>
    )
}

type TimelineData = {
    date: string;
    key: string;
    place: string;
}

export const Timeline = (props: {lang:Language, name: string, elements: TimelineData[] }) => {
    const t = translations[props.lang].resume;
    return (
        <div className="container-fluid d-flex flex-column fw-semibold">
            <h4>{props.name}</h4>
            {props.elements.map((item: TimelineData) => {
                const data =
                    t.formations?.[item.key] || t.experiences?.[item.key];
                return (
                    <Element_Timeline
                        key={item.key}
                        date={item.date}
                        name={data.name}
                        place={item.place}
                        role={data.role}
                        specialty={data.specialty}
                    />)
            })}
        </div>
    )
}