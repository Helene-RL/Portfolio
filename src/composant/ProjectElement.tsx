import React, {ReactNode} from "react";

export const ProjectElement = (props: { title?: string, element?: any, class?: string, children: ReactNode }) => {
    if (!props.element || (Array.isArray(props.element) && props.element.length == 0)) return null;
    return (
        <div className={`w-50 ${props.class} pe-1`}>
            {props.title && <h3 className="mb-3 h3">
                {props.title}
            </h3>}
            {props.children}
        </div>
    )
}