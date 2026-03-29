import React from "react";
import Navbar from "../composant/Navbar";
import {Section} from "../composant/Section";
import {Footer} from "../composant/Footer";
import {sectionContent} from "../data/SectionData";
import "../style.css"

import {useState} from "react";
import {Language, translations} from "../data/i18n";


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

export const HomePage = () => {
    const [lang, setLang] = useState<Language>("fr");

    const content = sectionContent(lang);
    return (
        <>
            {/*header*/}
            <header>
                <Navbar lang={lang} setLang={setLang}/>
            </header>
            {/*body*/}
            <div className="container-fluid d-flex flex-column w-100 scrollspy-example"
                 data-bs-spy="scroll" data-bs-target="#navbar-header" data-bs-root-margin="0px 0px -40%"
                 data-bs-smooth-scroll="true" tabIndex={0}>

                {Object.keys(translations[lang]).map((section) => {
                    const contentSection = content[section]
                    const objectSection = translations[lang][section];
                    return (
                        <Section
                            key={section}
                            id={section}
                            name={objectSection?.title || objectSection.title}
                            className={contentSection.className}
                        >
                            {contentSection.content}
                        </Section>
                    )
                })}

                <div className="scroll-to-top background-blue" onClick={scrollToTop}>
                    <span>&uarr;</span>
                </div>
            </div>
            {/*footer*/}
            <Footer/>
        </>
    )
}
