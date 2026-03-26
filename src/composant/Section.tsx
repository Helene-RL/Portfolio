import React, {ReactNode} from "react";

export const Section = ({id, name, className, level = 2, children}: {
    id: string,
    name: string,
    className?: string;
    level?: 1 | 2,
    children?: ReactNode
}) => {
    const Tag = level === 1 ? "h1" : "h2";
    return (
        <section id={id}
                 className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
            <Tag>{name}</Tag>
            <div className={`container-fluid d-flex ${className}`}>
                {children}
            </div>
        </section>
    )
}