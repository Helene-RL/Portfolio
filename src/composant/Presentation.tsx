import React from "react";
import {scrollToSection} from "./Scroll";
import {Language, translations} from "../data/i18n";

export const Presentation = (props:{lang: Language} ) => {
    const t = translations[props.lang].presentation
    return (
        <div className="presentation">
            <h3 className="pb-3">{t.text}</h3>
            <div className="text-start">
                <p dangerouslySetInnerHTML={{ __html: t.paragraphe1 }} />
                <p>{t.paragraphe2}
                </p>
                <p>{t.paragraphe3}
                </p>
                <p>{t.paragraphe4}</p>
            </div>
            <button className="btn btn-primary background-blue fw-bold"
                    onClick={() => scrollToSection("contact")}>Contact
            </button>
        </div>
    )
}