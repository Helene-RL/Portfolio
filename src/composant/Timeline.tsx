// @ts-ignore
import React from "react";

export const Element_Timeline = (props: { date: string, name: string, place: string }) => {
    return (
        <div className="bg-primary m-2 p-1 rounded-4 text-white background-blue">
            <span>{props.date}</span><br/>
            <span>{props.name}</span><br/>
            {props.place}
        </div>
    )
}

type TimelineData = {
    date: string;
    name: string;
    place: string;
}

export const Timeline = (props: { name: string, elements: TimelineData[] }) => {
    return (
        <div className="container-fluid d-flex flex-column fw-semibold">
            <h4 className="">{props.name}</h4>
            {props.elements.map((item: TimelineData) => (
                <Element_Timeline
                    key={item.name}
                    date={item.date}
                    name={item.name}
                    place={item.place}/>
            ))}
        </div>
    )
}