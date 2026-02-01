import React, {ReactNode} from "react";

export const ProjectSection = (props: { children: ReactNode}) => {
    return (
        <div className={`d-flex flex-row mb-4 px-1`}>
            {props.children}
        </div>
    );
};