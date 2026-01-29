
import React, {ReactNode} from "react";

export const Section = ({id, name, level = 2, children}: {
    id: string,
    name: string,
    level?: 1 | 2,
    children?: ReactNode
}) => {
    const Tag = level === 1 ? "h1" : "h2";
    return (
        <section id={id}
                 className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
            <Tag>{name}</Tag>
            {children}
        </section>
    )
}