import React, {ReactNode} from "react";

export const ProjectElement = ({title, element, className, width50 = true, children} : {
    title?: string,
    element?: any,
    className?: string,
    width50?: boolean,
    children: ReactNode
}) => {
    if (!element || (Array.isArray(element) && element.length == 0)) return null;
    return (
        <div className={`${width50 ? "w-50" : ""} ${className} pe-1`}>
            {title && <h3 className="mb-3 h3">
                {title}
            </h3>}
            {children}
        </div>
    )
}